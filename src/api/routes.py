"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, Users, User_Data
from api.utils import generate_sitemap, APIException
from flask_jwt_extended import jwt_required, get_jwt_identity, create_access_token

api = Blueprint('api', __name__)  

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
        current_user_data = User_Data.query.filter_by(user_id = current_user_id).first()
        if current_user_data == None:
            user_created = User_Data(user_id = current_user_id, name = body_name, pregnancy_weeks = body_pregnancy_weeks, aproximate_birth_date = body_aproximate_birth_date, children_number = body_children_number, caesarean_sections_number =  body_caesarean_sections_number,  companion = body_companion, city = body_city,  birth_place = body_birth_place, current_hospital = body_current_hospital)
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
    users_data = User_Data.query.all()
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
    else: return jsonify({"msg": "Error, no se han podido guardar los datos"}), 400 

@api.route('/login', methods=['POST'])
def login():
    email = request.json.get("Email", None)
    password = request.json.get("Password", None)
    user = Users.query.filter_by(email=email).first()
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
    current_user_data = User_Data.query.filter_by(user_id = current_user_id).first()
    if current_user_id and current_user_data == None:
        return jsonify({"info": user.serialize()}), 200
    elif current_user_id and current_user_data:     
        return jsonify({"info": user.serialize(), "data": current_user_data.serialize() }), 200
    else:
       return jsonify({"user_loggin_info": user.serialize(), "user_data": "No user data" }), 400  


