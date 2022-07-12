"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint, redirect
from api.models import db, Users, UserData, UserRol, ServiceType, Service, Document, ServiceRols, ServiceDocuments, ServiceToService, ServiceHired, UserFaq, BusinessFaq, BirthplanForm, Appointment, CalendarAvailability, BirthplanAnswer, BirthplanComment, BirthplanSection, BirthplanSubsection
from api.utils import generate_sitemap, APIException
from flask_jwt_extended import jwt_required, get_jwt_identity, create_access_token
from flask_mail import Mail, Message


import cloudinary
import cloudinary.uploader
import stripe
import json
import os
import datetime


api = Blueprint('api', __name__)  


DOMAIN = "https://3000-ederdon-tiamatidoula-pajnr7xqs5q.ws-eu51.gitpod.io/"
stripe.api_key = "sk_test_51L9AB1GwDdfyjr9WWHWxYk8V77Cd7dDRpQc1JhXslN9vOfopsi8sNtfduhXogaZobR1ggOHhfdW57YFQUIaMGdUD00yAYi6V1I"
ENDPOINT_SECRET = "whsec_858463f07c3b0bdad46be3660513488cf9f6664d2a5f10f38a81e1b2a08134fb"
   

@api.route('/protected', methods=['GET'])
@jwt_required()
def private():
    current_user_id = get_jwt_identity()
    user = Users.query.get(current_user_id)

    if user:
        return jsonify({"logged": True}), 200
    else:
        return jsonify({"logged": False}), 400


@api.route('/signup', methods=['POST'])
def save_signup_user():
    body_email = request.json.get("email")
    body_password = request.json.get("password")
    body_rol = request.json.get("rol")
    if body_email and body_password:
        if Users.query.filter_by(email = body_email).first() == None:
            user_created = Users(email = body_email, password = body_password, rol = body_rol)
            db.session.add(user_created)
            db.session.commit()
            access_token = create_access_token(identity=user_created.id)
           
            return jsonify({"logged":True, "token": access_token, "msg": "Usuario creado correctamente", "User": user_created.serialize()}), 200    
        else: return jsonify({"msg": "Error, el email ya existe como usuaria"}), 400   
    else: return jsonify({"msg": "Error, comprueba email y contraseña"}), 400       
     
@api.route('/form', methods=['PUT']) 
@jwt_required()
def save_or_update_user_form():
    current_user_id = get_jwt_identity()
    user = Users.query.get(current_user_id)
    body_name = request.json.get("name")
    body_pregnancy_weeks = request.json.get("pregnancy_weeks")
    body_aproximate_birth_date = request.json.get("aproximate_birth_date")
    body_children_number = request.json.get("children_number")
    body_caesarean_sections_number = request.json.get("caesarean_sections_number")
    body_companion = request.json.get("companion")
    body_city = request.json.get("city")
    body_birth_place = request.json.get("birth_place")
    body_current_hospital = request.json.get("current_hospital")
    if current_user_id != None:
        current_user_data = UserData.query.filter_by(user_id = current_user_id).first()
        if current_user_data == None:
            user_created = UserData(user_id = current_user_id, name = body_name, pregnancy_weeks = body_pregnancy_weeks, aproximate_birth_date = body_aproximate_birth_date, children_number = body_children_number, caesarean_sections_number =  body_caesarean_sections_number,  companion = body_companion, city = body_city,  birth_place = body_birth_place, current_hospital = body_current_hospital)
            db.session.add(user_created)
            db.session.commit()
            return jsonify({"msg": "Datos guardados correctamente"}), 200    
        else: 
            current_user_data.name = body_name 
            current_user_data.pregnancy_weeks = body_pregnancy_weeks 
            current_user_data.aproximate_birth_date = body_aproximate_birth_date 
            current_user_data.children_number = body_children_number
            current_user_data.caesarean_sections_number = body_caesarean_sections_number 
            current_user_data.companion = body_companion 
            current_user_data.city = body_city
            current_user_data.birth_place = body_birth_place 
            current_user_data.current_hospital = body_current_hospital
            db.session.commit()
            return jsonify({'msg': "Datos modificados correctamente"}), 200 

    else: return jsonify({"msg": "Error, no se han podido guardar los datos"}), 400      

@api.route('/users', methods=['GET'])
def get_all_users():
    users = Users.query.all()
    users_serialized = list(map(lambda item: item.serialize(), users)) 
    return jsonify({"response": users_serialized}), 200      


@api.route('/users_data', methods=['GET'])
def get_all_users_data():
    users_data = UserData.query.all()
    users_data_serialized = list(map(lambda item: item.serialize(), users_data)) 
    return jsonify({"response": users_data_serialized}), 200    

@api.route('/profile', methods=['PUT'])
@jwt_required()
def change_user_email_or_password():
    current_user_id = get_jwt_identity()
    user = Users.query.get(current_user_id)
    body_email = request.json.get("email")
    body_password = request.json.get("password")
    user_change = Users.query.filter_by(id = current_user_id).first()
    if user_change != None:
        user_change.email = body_email
        db.session.commit()
        return jsonify({"msg": "Datos guardados correctamente"}), 200   
    else: return jsonify({"msg": "Error, no se han podido guardar los datos"}), 400, 401 

@api.route('/login', methods=['POST'])
def login():
    email = request.json.get("Email", None)
    password = request.json.get("Password", None)
    user = Users.query.filter_by(email=email).filter_by(is_active=True).first()
    if user is None:
        return jsonify({"msg": "Incorrect email"}), 400
    user = Users.query.filter_by(email=email, password=password).first()
    if user is None:
        return jsonify({"msg": "Incorrect password"}), 400
    access_token = create_access_token(identity=user.id)
    return jsonify({"logged":True, "token": access_token, "msg": "User logged in correctly", "User": user.serialize()}), 200

@api.route('/user_info', methods=['GET'])
@jwt_required()
def get_user_info():
    current_user_id = get_jwt_identity()
    user = Users.query.get(current_user_id)
    current_user_data = UserData.query.filter_by(user_id = current_user_id).first()
    if current_user_id and current_user_data == None:
        return jsonify({"info": user.serialize()}), 200
    elif current_user_id and current_user_data:     
        return jsonify({"info": user.serialize(), "data": current_user_data.serialize() }), 200
    else:
       return jsonify({"user_loggin_info": user.serialize(), "user_data": "No user data" }), 400  
      
@api.route('/deleteUser', methods=['DELETE'])
@jwt_required()
def delete_user():
    current_user_id = get_jwt_identity()
    user = Users.query.get(current_user_id)
    user.is_active = False
    db.session.commit()
    return jsonify({"msg": "User deleted, ok"}), 200     


@api.route('/upload', methods=['POST'])
def upload():
    try:
        result = cloudinary.uploader.upload(request.files["document"])
    except ValueError:
        # Error must supply api_key  
        return jsonify({"msg":"Falta api_key. Contacta al administrador/a de la web"}), 400
    except cloudinary.exceptions.Error as error:  
        return jsonify({"msg":str(error)}), 400
    except:
        return jsonify({"msg":"Contacta al administrador/a de la web"}), 400
    document_url = result["secure_url"]    
    return jsonify({"document_created_url": document_url}), 200

@api.route('/document/<id>', methods=['DELETE'])
def delete_document(id):
    document = Document.query.get(id)
    db.session.delete(document)
    db.session.commit()  
    return jsonify({"response":"Documento borrado correctamente"}), 200  
        
@api.route('/document', methods=['POST'])
def new_document():
    document_url = request.json.get("document_url") 
    document_name = request.json.get("document_name") 
    document_description =request.json.get("document_description")
    document_cover_url =request.json.get("document_cover_url")
    
    document_created = Document(
        document_url = document_url,
        document_name = document_name,
        document_description = document_description,
        document_cover_url = document_cover_url
        )
    db.session.add(document_created)
    db.session.commit()
    return jsonify({"document_created_id": document_created.id}), 200

@api.route('/document', methods=['PUT'])
def update_document():
    document_id = request.json.get("id")
    document_url = request.json.get("document_url") 
    document_name = request.json.get("document_name") 
    document_description = request.json.get("document_description")
    document_cover_url = request.json.get("document_cover_url")

    document = Document.query.get(document_id)
    if document:
        document.document_url = document_url
        document.document_name = document_name
        document.document_description = document_description
        document.document_cover_url = document_cover_url
        db.session.commit()
        return jsonify({'msg': "Document correctly updated"}), 200
    else: 
        return jsonify({'msg': "Error updating document. Document id not found"}), 400

  
@api.route('/documents', methods=['GET'])
def documents():
    documents = Document.query.all()
    documents_serialized = list(map(lambda item: item.serialize(), documents))
    return jsonify({"response":documents_serialized}), 200  
  
#services

@api.route('/services', methods=['GET'])
def services():
    service_response=[]
    services = Service.query.all()
    if services:
        services_serialized = list(map(lambda item: item.serialize(), services))
        for service in services_serialized:
            #get rols
            rols = ServiceRols.query.filter_by(service_id=service["id"])
            rols_serialized = list(map(lambda item: item.serialize(), rols))
            services_connected = ServiceToService.query.filter_by(service_id_father=service["id"])
            services_connected_serialized = list(map(lambda item: item.serialize(), services_connected))
            service_complete = {
                "service_id": service["id"],
                "service": service,
                "rols": rols_serialized,
                "services_connected": services_connected_serialized,
            }
            service_response.append(service_complete)

        return jsonify({"response":service_response}), 200    
    else: 
        return jsonify({"response":services,"msg":"There are no services in database"}), 200
    
#FAQ
    
@api.route('/user_faq', methods=['GET'])
def get_user_faq():
    user_faq = UserFaq.query.all()
    user_faq_serialized = list(map(lambda user_faq: user_faq.serialize(), user_faq))
    return jsonify({"response": user_faq_serialized}), 200

@api.route('/business_faq', methods=['GET'])
def get_business_faq():
    business_faq = BusinessFaq.query.all()
    business_faq_serialized = list(map(lambda business_faq: business_faq.serialize(), business_faq))
    return jsonify({"response": business_faq_serialized}), 200
    

@api.route('/create_checkout_session', methods=['POST'])
def create_checkout_session():
    session_info = request.get_json()

    try:
        line_items=session_info["line_items"]
    except:
        return jsonify({"response": "/"}), 400
        
    try:
        client_reference_id = session_info["client_reference_id"]
    except:
        client_reference_id = None

    try: 
        customer_email = session_info["customer_email"]
    except:
        customer_email = None

    try:
        checkout_session = stripe.checkout.Session.create(
            line_items=session_info["line_items"],
            client_reference_id=client_reference_id,
            customer_email=customer_email,
            mode='payment',
            success_url= DOMAIN + "/redirect"+ '?success=true',
            cancel_url= DOMAIN + '/redirect'+ '?canceled=true',
        )
    except Exception as e:
        return str(e)

    return jsonify({"response": checkout_session.url}), 303

    
@api.route('/webhook', methods=['POST'])
def webhook():
    event = None
    payload = request.data
    sig_header = request.headers['STRIPE_SIGNATURE']

    try:
        event = stripe.Webhook.construct_event(
            payload, sig_header, ENDPOINT_SECRET
        )
    except ValueError as e:
        # Invalid payload
        raise e
    except stripe.error.SignatureVerificationError as e:
        # Invalid signature
        raise e

    # Handle the event  
    if event['type'] == 'payment_intent.succeeded':
        payment_intent = event['data']['object']

    if event['type'] == 'checkout.session.completed':
        session = event['data']['object']
        fulfill_order(session)

    else:
      print('Unhandled event type {}'.format(event['type']))

    return jsonify(success=True)

def fulfill_order(session): 
    try:
        if session["status"]=="complete":
            line_items = stripe.checkout.Session.list_line_items(session["id"])["data"]
    except:
        return jsonify({"response": "Checkout status not complete or without line items"}), 400

    for service_hired in line_items:
        try:
            service = Service.query.filter_by(stripe_product_id=service_hired["price"]["product"]).first()
        except:
            return jsonify({"response": "no service found for"+service_hired["description"]}), 400

        new_service_hired = ServiceHired(
            user_id = session["client_reference_id"],
            service_id = service.id,
            sessions_left = service.session_qty,
        )
        db.session.add(new_service_hired)
        db.session.commit()

#CALENDAR

@api.route('/available_datetime', methods=['GET'])
@jwt_required()
def get_available_datetime():
    current_user_id = get_jwt_identity()
    user = Users.query.get(current_user_id)
    dates = CalendarAvailability.query.filter(CalendarAvailability.is_available == True)
    dates_serialized = list(map(lambda x: x.serialize(), dates))
    if user:
        return jsonify({"resp": dates_serialized}), 200
    else: return jsonify({"No se ha podido traer la información"}), 400

@api.route('/available_datetime/<body_date>', methods=['GET'])
@jwt_required()
def get_available_datetime_of_selected_date(body_date):
    current_user_id = get_jwt_identity()
    user = Users.query.get(current_user_id)
    datetime = CalendarAvailability.query.filter(CalendarAvailability.date == body_date, CalendarAvailability.is_available == True)
    datetime_serialized = list(map(lambda x: x.serialize(), datetime))
    if user:
        return jsonify({"resp": datetime_serialized}), 200
    else: return jsonify({"No se ha podido traer la información"}), 400       

@api.route('/services_hired', methods=['GET'])
@jwt_required()
def get_services_hired_by_user():
    current_user_id = get_jwt_identity()
    user = Users.query.get(current_user_id)
    if user:
        user_service_hired = ServiceHired.query.filter_by(user_id = current_user_id)
        user_service_hired_serialized =  list(map(lambda x: x.serialize(), user_service_hired))
        services = Service.query.all()
        service_id_name = list(map(lambda x: {'id': x.id, 'service_name':x.name}, services))
        return jsonify({"service_hired_id": user_service_hired_serialized, "services_id_name": service_id_name}), 200
    else: return jsonify({"No se ha podido traer la información"}), 400

@api.route('/appointment', methods=['POST'])
@jwt_required()
def save_user_appointment():
    current_user_id = get_jwt_identity()
    user = Users.query.get(current_user_id)
    if user:
        body_date = request.json.get("date")
        body_time = request.json.get("time")
        body_service = request.json.get("service")
        appointment_saved = Appointment(user_id = current_user_id, date = body_date, time = body_time, service = body_service)
        db.session.add(appointment_saved)
        db.session.commit()
        dateTime = CalendarAvailability.query.filter_by(date = body_date).filter_by(time = body_time).first()
        dateTime.is_available = False
        db.session.commit()
        return jsonify({"msg": "Datos guardados correctamente"}), 200   
    else: return jsonify({"msg": "Error, no se han podido guardar los datos"}), 400

@api.route('/appointment', methods=['GET'])
@jwt_required()
def get_user_appointments():
    current_user_id = get_jwt_identity()
    user = Users.query.get(current_user_id)
    if user:
        user_appointment = Appointment.query.filter_by(user_id=current_user_id)
        user_appointment_serialized = list(map(lambda x: x.serialize(), user_appointment))
        return jsonify({"resp": user_appointment_serialized}), 200
    else: return jsonify({"No se ha podido traer la información"}), 400

@api.route('/appointment', methods=['PUT'])
@jwt_required()
def modify_user_appointment():
    current_user_id = get_jwt_identity()
    user = Users.query.get(current_user_id)
    old_date = request.json.get("old_date")
    old_time = request.json.get("old_time")
    body_date = request.json.get("date")
    body_time = request.json.get("time")
    body_service = request.json.get("service")
    appointment_id = request.json.get("id")
    appointment_change = Appointment.query.filter_by(user_id = current_user_id).filter_by(id = appointment_id).first()
    if appointment_change != None:
        appointment_change.date = body_date
        appointment_change.time = body_time
        appointment_change.service = body_service
        appointment_change.id = appointment_id
        new_dateTime = CalendarAvailability.query.filter_by(date = body_date).filter_by(time = body_time).first()
        new_dateTime.is_available = False
        old_dateTime = CalendarAvailability.query.filter_by(date = old_date).filter_by(time = old_time).first()
        old_dateTime.is_available = True
        db.session.commit()
        return jsonify({"msg": "Se han realizado los cambios"}), 200   
    else: return jsonify({"msg": "Error, no se han podido realizar los cambios"}), 400

@api.route('/appointment', methods=['DELETE'])
@jwt_required()
def delete_user_appointment():
    current_user_id = get_jwt_identity()
    user = Users.query.get(current_user_id)
    body_date = request.json.get("date")
    body_time = request.json.get("time")
    dateTime = CalendarAvailability.query.filter_by(date = body_date).filter_by(time = body_time).first()
    dateTime.is_available = True
    appointment_id = request.json.get("id")
    appointment = Appointment.query.filter_by(user_id = current_user_id).filter_by(id = appointment_id).delete()
    db.session.commit()
    return jsonify({"msg": "User deleted, ok"}), 200

@api.route('/admin_calendar', methods=['POST'])
# @jwt_required()
def create_calendar_available_dates():
    start_date = request.json.get("start_date")
    end_date = request.json.get("end_date")
    all_dates_and_time = [(datetime.datetime.strptime(start_date,"%Y-%m-%d") + datetime.timedelta(days=d)) for d in range((datetime.datetime.strptime(end_date,"%Y-%m-%d") - datetime.datetime.strptime(start_date,"%Y-%m-%d")).days + 1)] 
    dates = list(map(lambda x: x.date().strftime("%Y-%m-%d"), all_dates_and_time))
    all_hours = ['09:00:00','10:00:00','11:00:00', '12:00:00','13:00:00', '16:00:00', '17:00:00', '18:00:00', '19:00:00', '20:00:00']
    for i in dates:
        for hour in all_hours:
            post_dates = CalendarAvailability(date = i, time = hour)
            db.session.add(post_dates)
            db.session.commit()
        return jsonify({"msg": "Time created"})    
    return jsonify({"msg": "Dates created"})

#Birthplan

@api.route('/birthplan_form', methods=['POST'])
@jwt_required()
def new_birthplan_info():
    current_user_id = get_jwt_identity()
    user = Users.query.get(current_user_id)
    if user:
        body_id = request.json.get("id")
        body_full_name= request.json.get("full_name")
        body_user_id = request.json.get("user_id")
        body_age = request.json.get("age")
        body_phone = request.json.get("phone")
        body_pregnancy_num = request.json.get("pregnancy_num")
        body_birth_num = request.json.get("birth_num")
        body_interruption_num = request.json.get("interruption_num")
        body_birth_date = request.json.get("birth_date")
        birthplan_info_saved = BirthplanForm(id = body_id, full_name=body_full_name, user_id=body_user_id, age=body_age, phone=body_phone, pregnancy_num=body_pregnancy_num, birth_num=body_birth_num, interruption_num=body_interruption_num, birth_date=body_birth_date)
        birthplan_info_saved_serialized = birthplan_info_saved.serialize()
        db.session.add(birthplan_info_saved)
        db.session.commit()
        return jsonify({"saved_info": birthplan_info_saved_serialized})

@api.route('/birthplan_form', methods=['GET'])
def get_birthplan_form():
    form = BirthplanForm.query.all()
    form_serialized = list(map(lambda item: item.serialize(), form))
    return jsonify({"resp": form_serialized}), 200

@api.route('birthplan_section', methods=['POST'])
def new_section():
    body_id = request.json.get("id")
    body_title = request.json.get("title")
    body_video = request.json.get("video")
    new_section = Birthplan_section(id=body_id, title=body_title, video=body_video)
    new_section_serialized = new_section.serialize()
    db.session.add(new_section)
    db.session.commit()
    return jsonify({"saved": new_section_serialized})

@api.route('birthplan_section', methods=['GET'])
def get_section():
    section = BirthplanSection.query.all()
    section_serialized = list(map(lambda item: item.serialize(), section))
    return jsonify({"resp": section_serialized}), 200

@api.route('birthplan_subsection', methods=['POST'])
def new_subsection():
    body_id = request.json.get("id")
    body_subtitle = request.json.get("subtitle")
    body_birthplan_section_id = request.json.get("birthplan_section_id")
    new_subsection = Birthplan_subsection(id=body_id, subtitle=body_subtitle, birthplan_section_id=body_birthplan_section_id)
    new_subsection_serialized = new_subsection.serialize()
    db.session.add(new_subsection)
    db.session.commit()
    return jsonify({"saved": new_subsection_serialized})

@api.route('birthplan_subsection', methods=['GET'])
def get_subsection():
    subsection = BirthplanSubsection.query.all()
    subsection_serialized = list(map(lambda item: item.serialize(), subsection))
    return jsonify({"resp": subsection_serialized}), 200

@api.route('birthplan_answer', methods=['POST'])
def new_answers():
    body_id = request.json.get("id")
    body_birthplan_section_id = request.json.get("birthplan_section_id")
    body_birthplan_subsection_id = request.json.get("birthplan_subsection_id")
    body_answer_type = request.json.get("answer_type")
    body_answer_text = request.json.get("answer_text")
    body_checked = request.json.get("checked")
    body_input_text = request.json.get("input_text")
    body_multiselect = request.json.get("multiselect")
    new_answers = Birthplan_answer(id=body_id, birthplan_section_id=body_birthplan_section_id, birthplan_subsection_id=body_birthplan_subsection_id, answer_type=body_answer_type, answer_text=body_answer_text, checked=body_checked, input_text=body_input_text, multiselect=body_multiselect)
    new_answers_serialized = new_answers.serialize()
    db.session.add(new_answers)
    db.session.commit()
    return jsonify({"saved": new_answers_serialized})

@api.route('birthplan_answer', methods=['GET'])
def get_answer():
    answer = BirthplanAnswer.query.all()
    answer_serialized = list(map(lambda item: item.serialize(), answer))
    return jsonify({"resp": answer_serialized}), 200

@api.route('birthplan_comment', methods=['POST'])
@jwt_required()
def new_comment():
    current_user_id = get_jwt_identity()
    user = Users.query.get(current_user_id)
    if user:
        body_id = request.json.get("id")
        body_birthplan = request.json.get("birthplan")
        body_birthplan_section_id = request.json.get("birthplan_section_id")
        body_user_id = request.json.get("user_id")
        body_comment_text = request.json.get("comment_text")
        new_comment = Birthplan_comment(id=body_id, birthplan=body_birthplan, birthplan_section_id=body_birthplan_section_id, user_id=body_user_id, comment_text=body_comment_text)
        new_comment_serialized = new_comment.serialize()
        db.session.add(new_comment)
        db.session.commit()
        return jsonify({"saved": new_comment_serialized})

@api.route('birthplan_comment', methods=['GET'])
def get_comment():
    comment = BirthplanComment.query.all()
    comment_serialized = list(map(lambda item: item.serialize(), comment))
    return jsonify({"resp": comment_serialized}), 200

