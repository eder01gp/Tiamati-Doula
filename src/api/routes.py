"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, Users, User_Data
from api.utils import generate_sitemap, APIException
from flask_jwt_extended import jwt_required, get_jwt_identity, create_access_token

api = Blueprint('api', __name__)  

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
            return jsonify({"logged":True, "token": access_token, "msg": "Usuario creado correctamente", "Usuario": user_created.serialize()}), 200    
        else: return jsonify({"msg": "Error, el email ya existe como usuaria"}), 400   
    else: return jsonify({"msg": "Error, comprueba email y password"}), 400       
     

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
        user_created = User_Data(user_id = current_user_id, name = body_name, pregnancy_weeks = body_pregnancy_weeks, aproximate_birth_date = body_aproximate_birth_date, children_number = body_children_number, caesarean_sections_number =  body_caesarean_sections_number,  companion = body_companion, city = body_city,  birth_place = body_birth_place, current_hospital = body_current_hospital)
        db.session.add(user_created)
        db.session.commit()
        return jsonify({"msg": "Datos guardados correctamente"}), 200   
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

# @api.route('/perfil', methods=['POST'])
# Aquí iria lo del token
# def save_or_update_usuaria_avatar(user_id):
#     current_user_id = get_jwt_identity()
#     usuaria = Users.query.get(current_user_id)
#     if user:
#         body_avatar = request.json.get("avatar") #-------------En la vista 'perfil' sería: <input type=file> (mirar en Bootstrap)------------#
#         usuaria_avatar = Usuaria(avatar = body_avatar)
#         db.session.add(usuaria_avatar)
#         db.session.commit()
#         return jsonify({"msg": "Avatar guardado correctamente"}), 200
#     else: return jsonify({"msg": "Error, no se ha podido guardar el avatar"}), 400    
    
