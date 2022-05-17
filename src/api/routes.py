"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, Usuarias, Datos_Usuaria
from api.utils import generate_sitemap, APIException
# from flask_jwt_extended import jwt_required, get_jwt_identity, create_access_token

api = Blueprint('api', __name__)  

@api.route('/usuarias', methods=['POST'])
def save_signup_usuaria():
    body_email = request.json.get("email")
    body_contraseña = request.json.get("contraseña")
    body_rol = request.json.get("rol")
    if body_email and body_contraseña:
        if Usuarias.query.filter_by(email = body_email).first() != None:
            user_created = Usuaria(email = body_email, contraseña = body_contraseña, rol = body_rol)
            db.session.add(user_created)
            db.session.commit()
            usuaria_id = Usuarias.query.filter_by(email = body_email).first() 
            user_data_created = Datos_usuaria(usuaria_id = usuaria_id.id)
            db.session.add(user_data_created)
            db.session.commit()
            return jsonify({"msg": "Usuaria creada correctamente", "Usuaria": user_created.serialize()}), 200    
        else: return jsonify({"msg": "Error, el email ya existe como usuaria"}), 400   
    else: return jsonify({"msg": "Error, comprueba email y contraseña"}), 400       

@api.route('/signup_empresa', methods=['POST'])
def save_signup_empresa():
    body_nombre = request.json.get("nombre")
    body_email = request.json.get("email")
    body_contraseña = request.json.get("contraseña")
    if body_email and body_contraseña:
        user_created = Empresa(nombre = body_nombre, email = body_email, contraseña = body_contraseña)
        db.session.add(user_created)
        db.session.commit()
        return jsonify({"msg": "Usuario creado correctamente", "Empresa": user_created.serialize()}), 200    
    else: return jsonify({"msg": "Error, comprobar email y contraseña"}), 400       

@api.route('/form', methods=['PUT'])
def save_or_update_user_form():
    body_nombre = request.json.get("nombre")
    body_semanas_embarazo = request.json.get("semanas_embarazo")
    body_fecha_parto = request.json.get("fecha_aproximada_parto")
    body_numero_hijos = request.json.get("numero_hijos")
    body_cesareas = request.json.get("cesareas")
    body_acompanante = request.json.get("acompanante")
    body_ciudad = request.json.get("ciudad")
    body_lugar_parto = request.json.get("lugar_parto")
    body_hospital_actual = request.json.get("hospital_actual")

    user_created = Usuaria(nombre = body_nombre, semanas_embarazo = body_semanas_embarazo, fecha_aproximada_parto = body_fecha_parto, numero_hijos = body_numero_hijos, cesareas =  body_cesareas,  acompanante = body_acompanante, ciudad = body_ciudad,  lugar_parto = body_lugar_parto, hospital_actual = body_hospital_actual)
    db.session.add(user_created)
    db.session.commit()
    return jsonify({"msg": "Datos guardados correctamente"}), 200    

@api.route('/usuarias', methods=['GET'])
def get_all_users():
    users = Usuarias.query.all()
    users_serialized = list(map(lambda item: item.serialize(), users)) 
    return jsonify({"response": users_serialized}), 200      

@api.route('/empresas', methods=['GET'])
def get_all_empresas():
    empresas = Empresa.query.all()
    empresas_serialized = list(map(lambda item: item.serialize(), empresas)) 
    return jsonify({"response": empresas_serialized}), 200      

@api.route('/perfil', methods=['POST'])
# @jwt_required()
def save_or_update_user_avatar(user_id):
    current_user_id = get_jwt_identity()
    user = User.query.get(current_user_id)
    if user:
        body_avatar = request.json.get("avatar") #-------------En la vista 'perfil' sería: <input type=file> (mirar en Bootstrap)------------#
        user_avatar = Usuaria(avatar = body_avatar)
        db.session.add(user_avatar)
        db.session.commit()
        return jsonify({"msg": "Avatar guardado correctamente"}), 200
    else: return jsonify({"msg": "Error, no se ha podido guardar el avatar"}), 400    
    
