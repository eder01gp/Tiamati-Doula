"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, Usuarias, Datos_Usuaria
from api.utils import generate_sitemap, APIException

api = Blueprint('api', __name__)  

@api.route('/signup', methods=['POST'])
def save_signup_usuaria():
    body_email = request.json.get("email")
    body_contraseña = request.json.get("contraseña")
    body_rol = request.json.get("rol")
    if body_email and body_contraseña:
        # if Usuarias.query.filter_by(email == body_email).first() == None:
            user_created = Usuarias(email = body_email, contraseña = body_contraseña, rol = body_rol)
            db.session.add(user_created)
            db.session.commit()
            usuaria_id = Usuarias.query.filter_by(email = body_email).first() 
            user_data_created = Datos_usuaria(usuaria_id = usuaria_id.id)
            db.session.add(user_data_created)
            db.session.commit()
            return jsonify({"msg": "Usuario creado correctamente", "Usuario": user_created.serialize()}), 200    
        # else: return jsonify({"msg": "Error, el email ya existe como usuaria"}), 400   
    else: return jsonify({"msg": "Error, comprueba email y contraseña"}), 400       
     

@api.route('/form/<int:usuaria_id>', methods=['POST'])
def save_or_update_user_form(usuaria_id):
    usuaria_id = Datos_Usuaria.query.get(usuaria_id)
    body_nombre = request.json.get("nombre")
    body_semanas_embarazo = request.json.get("semanas_embarazo")
    body_fecha_parto = request.json.get("fecha_aproximada_parto")
    body_numero_hijos = request.json.get("numero_hijos")
    body_cesareas = request.json.get("cesareas")
    body_acompanante = request.json.get("acompanante")
    body_ciudad = request.json.get("ciudad")
    body_lugar_parto = request.json.get("lugar_parto")
    body_hospital_actual = request.json.get("hospital_actual")
    if usuaria_id:
        user_created = Datos_Usuaria(nombre = body_nombre, semanas_embarazo = body_semanas_embarazo, fecha_aproximada_parto = body_fecha_parto, numero_hijos = body_numero_hijos, cesareas =  body_cesareas,  acompanante = body_acompanante, ciudad = body_ciudad,  lugar_parto = body_lugar_parto, hospital_actual = body_hospital_actual)
        db.session.add(user_created)
        db.session.commit()
        return jsonify({"msg": "Datos guardados correctamente"}), 200    

@api.route('/usuarias', methods=['GET'])
def get_all_usuarias():
    usuarias = Usuarias.query.all()
    usuarias_serialized = list(map(lambda item: item.serialize(), usuarias)) 
    return jsonify({"response": usuarias_serialized}), 200      

# @api.route('/perfil', methods=['POST'])
# Aquí iria lo del token
# def save_or_update_usuaria_avatar(usuaria_id):
#     current_usuaria_id = get_jwt_identity()
#     usuaria = Usuarias.query.get(current_usuaria_id)
#     if user:
#         body_avatar = request.json.get("avatar") #-------------En la vista 'perfil' sería: <input type=file> (mirar en Bootstrap)------------#
#         usuaria_avatar = Usuaria(avatar = body_avatar)
#         db.session.add(usuaria_avatar)
#         db.session.commit()
#         return jsonify({"msg": "Avatar guardado correctamente"}), 200
#     else: return jsonify({"msg": "Error, no se ha podido guardar el avatar"}), 400    
    
