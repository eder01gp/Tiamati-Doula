from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class Usuarias(db.Model): 
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    contraseña = db.Column(db.String(80), nullable=False) 
    rol = db.Column(db.String(120))      

    def serialize(self):
        return {
            "id": self.id,
            "email": self.email,
            "rol": self.rol
        }


class Datos_Usuaria(db.Model): 
    id = db.Column(db.Integer, primary_key=True)
    usuaria_id = db.Column(db.Integer, db.ForeignKey('usuarias.id'))
    usuarias = db.relationship(Usuarias)
    nombre = db.Column(db.String(150))
    semanas_embarazo = db.Column(db.Integer)
    fecha_aproximada_parto = db.Column(db.Date)
    numero_hijos = db.Column(db.Integer)
    numero_cesareas = db.Column(db.Integer)
    acompanante = db.Column(db.String(250))
    ciudad = db.Column(db.String(150))
    lugar_parto = db.Column(db.String(120))
    hospital_actual = db.Column(db.String(250))
    avatar = db.Column(db.String(500))

    def serialize(self):
        return {
            "id": self.id,
            "usuaria_id": self.usuaria_id,
            "nombre": self.nombre,
            "semanas_embarazo": self.semanas_embarazo,
            "fecha_aproximada_parto": self.fecha_aproximada_parto,
            "numero_hijos": self.numero_hijos,
            "numero_cesareas": self.numero_cesareas,
            "acompanante": self.acompanante,
            "ciudad": self.ciudad,
            "lugar_parto": self.lugar_parto,
            "hospital_actual": self.hospital_actual,
        }


