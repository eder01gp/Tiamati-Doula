from flask_sqlalchemy import SQLAlchemy
import pickle

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
    birthplan  = db.relationship('Birthplan', backref='users', lazy=True)
    birthplan_form  = db.relationship('BirthplanForm', backref='users', lazy=True)
    birthplan_comment  = db.relationship('Birthplan_comment', backref='users', lazy=True)
    
    
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

ServiceDocument = db.Table("ServiceDocument",
    db.Column("id", db.Integer, primary_key=True),
    db.Column("service_id", db.Integer, db.ForeignKey("service.id")),
    db.Column("document_id", db.Integer, db.ForeignKey("document.id"))
    )

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
    service_type = db.relationship("ServiceType")
    session_time = db.Column(db.Float)
    session_qty = db.Column(db.Integer)
    sold_per_units = db.Column(db.Boolean)
    description = db.Column(db.String(2000))
    description_short = db.Column(db.String(1000))
    description_includes = db.Column(db.String(1500))
    price = db.Column(db.Integer)
    discount = db.Column(db.Integer)
    service_cover_url = db.Column(db.String(500))
    qty = db.Column(db.Integer, default=1)
    qty_error = db.Column(db.String(200))
    selected = db.Column(db.Boolean, default= False)
    modal_selected_KO = db.Column(db.String(50))
    documents = db.relationship("Document", secondary=ServiceDocument, backref=db.backref("Service"))
    stripe_price_id = db.Column(db.String(200))
    stripe_product_id = db.Column(db.String(200))

    def __repr__(self):
        return "service: "+self.name

    def serialize(self):
        return {
            "id": self.id,
            "name": self.name,
            "type": self.type,
            "session_time": self.session_time,
            "session_qty": self.session_qty,
            "sold_per_units": self.sold_per_units,
            "description": self.description,
            "description_short": self.description_short,
            "description_includes": self.description_includes,
            "price": self.price,
            "discount": self.discount,
            "service_cover_url": self.service_cover_url,
            "qty": self.qty,
            "qty_error": self.qty_error,
            "selected": self.selected,
            "modal_selected_KO": self.modal_selected_KO,
            "documents": list(map(lambda item: item.serialize(), self.documents)),
            "stripe_price_id": self.stripe_price_id,
            "stripe_product_id": self.stripe_product_id,
        }
    

class ServiceRols(db.Model): 
    id = db.Column(db.Integer, primary_key=True)
    service_id = db.Column(db.Integer, db.ForeignKey('service.id'))
    service = db.relationship(Service)
    rol_id = db.Column(db.Integer, db.ForeignKey('user_rol.id'))
    rol= db.relationship(UserRol)

    def serialize(self):
        return {
            "id": self.id,
            "service": self.service_id,
            "rol": self.rol_id,
            "rol_name": self.rol.rol
        }

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
    sessions_left = db.Column(db.Integer)

    def serialize(self):
        return {
            "id": self.id,
            "service_id": self.service_id,
            "user_id": self.user_id,
            "sessions_left": self. sessions_left,
        }

class Document(db.Model): 
    id = db.Column(db.Integer, primary_key=True)
    document_url = db.Column(db.String(300))
    document_name = db.Column(db.String(300))
    document_description = db.Column(db.String(300))
    document_cover_url = db.Column(db.String(300))
    
    def __repr__(self):
        return ("document: "+ self.document_name) if self.document_name is not None else {"document ": "without name"}

    def serialize(self):
        return {
            "id": self.id,
            "document_url": self.document_url,
            "document_name": self.document_name,
            "document_description": self.document_description,
            "document_cover_url": self.document_cover_url,
        }

class ServiceDocuments(db.Model): 
    id = db.Column(db.Integer, primary_key=True)
    service_id = db.Column(db.Integer, db.ForeignKey('service.id'))
    service = db.relationship(Service)
    document_id = db.Column(db.Integer, db.ForeignKey('document.id'))
    document = db.relationship(Document)

    
class UserFaq(db.Model): 
    id = db.Column(db.Integer, primary_key=True)
    question_id = db.Column(db.String(5), unique=True)
    question = db.Column(db.String(200))
    answer_id = db.Column(db.String(5), unique=True)
    answer = db.Column(db.String(200))  
    
    def serialize(self):
        return {
            "id": self.id,
            "question_id": self.question_id,
            "question": self.question,
            "answer_id": self.answer_id,
            "answer": self.answer
        }

class BusinessFaq(db.Model): 
    id = db.Column(db.Integer, primary_key=True)
    question_id = db.Column(db.String(5), unique=True)
    question = db.Column(db.String(200))
    answer_id = db.Column(db.String(5), unique=True)
    answer = db.Column(db.String(200))  

    def serialize(self):
        return {
            "id": self.id,
            "question_id": self.question_id,
            "question": self.question,
            "answer_id": self.answer_id,
            "answer": self.answer
        }

class Appointment(db.Model): 
    id = db.Column(db.Integer, primary_key=True)
    service = db.Column(db.Integer, db.ForeignKey('service.id'))
    services = db.relationship(Service)
    date = db.Column(db.Date)
    time = db.Column(db.Time)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'))
    users = db.relationship(Users)

    def serialize(self):
        return {
            "id": self.id,
            "service": self.service,
            "date": self.date.strftime("%Y-%m-%d") if self.date is not None else None,
            "time": self.time.strftime("%H:%M") if self.time is not None else None,
            "user_id": self.user_id,
        }

class CalendarAvailability(db.Model): 
    id = db.Column(db.Integer, primary_key=True)
    date = db.Column(db.Date)
    time = db.Column(db.Time)
    is_available = db.Column(db.Boolean)
    

    def serialize(self):
        return {
            "id": self.id,
            "date": self.date.strftime("%Y-%m-%d") if self.date is not None else None,
            "time": self.time.strftime("%H:%M") if self.time is not None else None,
            "is_available": self.is_available,
        }

#Birthplan

class Birthplan(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    birthplan_section = db.relationship('Birthplan_section', backref='section_birthplan', lazy=True)
    birthplan_form = db.relationship('BirthplanForm', backref='form_birthplan', lazy=True)

    def serialize(self):
        return{
            "id": self.id,
            "user_id": self.user_id,
           " birthplan_video": self.birthplan_video,
            "birthplan_section": self.birthplan_section,
            "birthplan_form": self.birthplan_form
        }

class BirthplanForm(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    birthplan = db.Column(db.Integer, db.ForeignKey('birthplan.id'), nullable=False)
    full_name = db.Column(db.String(50), nullable=False)
    age = db.Column(db.Integer, nullable=False)
    phone = db.Column(db.Integer, nullable=False)
    pregnancy_num = db.Column(db.Integer)
    birth_num = db.Column(db.Integer)
    interruption_num = db.Column(db.Integer)
    birth_date = db.Column(db.Date, nullable=False)

    def serialize(self):
        return{
            "id": self.id,
            "user_id": self.user_id,
            "birthplan": self.birthplan,
            "full_name": self.full_name,
            "age": self.age,
            "phone": self.phone,
            "pregnancy_num": self.pregnancy_num,
            "birth_num": self.birth_num,
            "interruption_num": self.interruption_num,
            "birth_date": self.birth_date
        }

class Birthplan_video(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    url = db.Column(db.String(100), nullable=False)
    birthplan_section = db.relationship('Birthplan_section', backref='birthplan_video', lazy=True)

    def serialize(self):
        return{
            "id": self.id,
            "birthplan": self.birthplan,
            "url": self.url,
            "birthplan_section": self.birthplan_section
        }

class Birthplan_section(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    birthplan = db.Column(db.Integer, db.ForeignKey('birthplan.id'), nullable=False)
    birthplan_video_id = db.Column(db.Integer, db.ForeignKey('birthplan_video.id'), nullable=False)
    title = db.Column(db.String(100))
    subtitle = db.Column(db.String(100))
    birthplan_answer_id = db.relationship('Birthplan_answer', backref='birthplan_section_answer', lazy=True)
    birthplan_comment_id = db.relationship('Birthplan_comment', backref='birthplan_section', lazy=True)

    def serialize(self):
        return{
            "id": self.id,
            "birthplan": self.birthplan,
            "birthplan_video_id": self.birthplan_video_id,
            "title": self.title,
            "subtitle": self.subtitle,
            "birthplan_answer_id": self.birthplan_answer_id,
            "birthplan_comment_id": self.birthplan_comment_id
        }

class Birthplan_answer(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    birthplan = db.Column(db.Integer, db.ForeignKey('birthplan.id'), nullable=False)
    birthplan_section_id = db.Column(db.Integer, db.ForeignKey('birthplan_section.id'), nullable=False)
    answer_type = db.Column(db.String(50), nullable=False)
    answer_text = db.Column(db.String(300), nullable=False)
    checked = db.Column(db.Boolean, nullable=False)
    input_text = db.Column(db.String(300))
    multiselect = db.Column(db.Boolean, nullable=False)

    def serialize(self):
        return{
            "id": self.id,
            "birthplan": self.birthplan,
            "birthplan_section_id": self.birthplan_section_id,
            "answer_type": self.answer_type,
            "answer_text": self.answer_text,
            "checked": self.checked,
            "input_text": self.input_text,
            "multiselect": self.multiselect
        }

class Birthplan_comment(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    birthplan = db.Column(db.Integer, db.ForeignKey('birthplan.id'), nullable=False)
    birthplan_section_id = db.Column(db.Integer, db.ForeignKey('birthplan_section.id'), nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    comment_text = db.Column(db.String(600), nullable=False)

    def serialize(self):
        return {
            "id": self.id,
            "birthplan": self.birthplan,
            "birthplan_section_id": self.birthplan_section_id,
            "user_id" : self.user_id,
            "comment_text": self.comment_text
        }
      