from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class Users(db.Model): 
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(80), nullable=False) 
    rol = db.Column(db.String(120))      

    def serialize(self):
        return {
            "id": self.id,
            "email": self.email,
            "rol": self.rol
        }


class User_Data(db.Model): 
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

    def serialize(self):
        return {
            "id": self.id,
            "user_id": self.user_id,
            "name": self.name,
            "pregnancy_weeks": self.pregnancy_weeks,
            "aproximate_birth_date": self.aproximate_birth_date,
            "children_number": self.children_number,
            "caesarean_sections_number": self.caesarean_sections_number,
            "companion": self.companion,
            "city": self.city,
            "birth_place": self.birth_place,
            "current_hospital": self.current_hospital,
        }


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