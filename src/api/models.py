from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class UserRol(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    rol = db.Column(db.String(150))

    def __repr__(self):
        return "Rol: "+self.rol

    def serialize(self):
        return {
            "id": self.id,
            "rol": self.rol,
        }

class Users(db.Model): 
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(80), nullable=False) 
    rol = db.Column(db.Integer, db.ForeignKey('user_rol.id'))
    user_rol = db.relationship(UserRol)
    is_active = db.Column(db.Boolean, default= True)

    def __repr__(self):
        return "User: "+self.email

    def serialize(self):
        return {
            "id": self.id,
            "email": self.email,
            "rol": self.rol,
            "is_active": self.is_active
        }

class UserData(db.Model): 
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'))
    users = db.relationship(Users)
    name = db.Column(db.String(150))
    pregnancy_weeks = db.Column(db.Integer)
    aproximate_birth_date = db.Column(db.Date)
    children_number = db.Column(db.Integer)
    caesarean_sections_number = db.Column(db.Integer)
    companion = db.Column(db.String(250))
    city = db.Column(db.String(150))
    birth_place = db.Column(db.String(120))
    current_hospital = db.Column(db.String(250))
    avatar = db.Column(db.String(500))

    def __repr__(self):
        return "User data of user  name:"+self.name

    def serialize(self):
        return {
            "id": self.id,
            "user_id": self.user_id,
            "name": self.name,
            "pregnancy_weeks": self.pregnancy_weeks,
            "aproximate_birth_date": self.aproximate_birth_date.strftime("%Y-%m-%d") if self.aproximate_birth_date is not None else None,
            "children_number": self.children_number,
            "caesarean_sections_number": self.caesarean_sections_number,
            "companion": self.companion,
            "city": self.city,
            "birth_place": self.birth_place,
            "current_hospital": self.current_hospital,
        }

class ServiceType(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    service_type = db.Column(db.String(150),unique=True,nullable=False)
    
    def __repr__(self):
        return "Service type: "+self.service_type

    def serialize(self):
        return {
            "id": self.id,
            "service_type": self.service_type,
        }

class Service(db.Model): 
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(200),nullable=False)
    type = db.Column(db.Integer, db.ForeignKey('service_type.id'))
    service_type = db.relationship(ServiceType)
    session_time = db.Column(db.Float)
    session_qty = db.Column(db.Integer)
    sold_per_units = db.Column(db.Boolean)
    description = db.Column(db.String(1000))
    description_includes = db.Column(db.String(1000))
    price = db.Column(db.Integer)
    discount = db.Column(db.Integer)
    service_cover_url = db.Column(db.String(500))
    qty = db.Column(db.Integer, default=1)
    qty_error = db.Column(db.String(200))
    selected = db.Column(db.Boolean, default= False)
    modal_selected_KO = db.Column(db.String(50))

    def __repr__(self):
        return "service: "+self.name

    def serialize(self):
        return {
            "id": self.id,
            "name": self.name,
            "type": self.type,
            "service_types": self.service_types,
            "session_time": self.session_time,
            "available_to": self.available_to,
            "access_to_documents": self.access_to_documents,
            "services_connected": self.services_connected,
            "sold_per_units": self.sold_per_units,
            "description": self.description,
            "description_includes": self.description_includes,
            "price": self.price,
            "discount": self.discount,
            "image_url": self.image_url,
            "qty": self.qty,
            "qty_error": self.qty_error,
            "selected": self.selected,
            "modal_selected_KO": self.modal_selected_KO,
        }

class ServiceRols(db.Model): 
    id = db.Column(db.Integer, primary_key=True)
    service_id = db.Column(db.Integer, db.ForeignKey('service.id'))
    service = db.relationship(Service)
    rol_id = db.Column(db.Integer, db.ForeignKey('user_rol.id'))
    rol= db.relationship(UserRol)

class ServiceToService(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    service_id_father = db.Column(db.Integer, db.ForeignKey('service.id'))
    service = db.relationship(Service, foreign_keys=[service_id_father])
    service_id_child = db.Column(db.Integer, db.ForeignKey('service.id'))
    service = db.relationship(Service, foreign_keys=[service_id_child])

class ServiceHired(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    service_id = db.Column(db.Integer, db.ForeignKey('service.id'))
    service = db.relationship(Service)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'))
    users = db.relationship(Users)
    sessions_left: db.Column(db.Integer)

class Document(db.Model): 
    id = db.Column(db.Integer, primary_key=True)
    document_url = db.Column(db.String(300))
    document_name = db.Column(db.String(300))
    document_cover_url = db.Column(db.String(300))
    
    def __repr__(self):
        return "document: "+self.document_name

    def serialize(self):
        return {
            "id": self.id,
            "document": self.document,
        }

class ServiceDocuments(db.Model): 
    id = db.Column(db.Integer, primary_key=True)
    service_id = db.Column(db.Integer, db.ForeignKey('service.id'))
    service = db.relationship(Service)
    document_id = db.Column(db.Integer, db.ForeignKey('document.id'))
    document = db.relationship(Document)