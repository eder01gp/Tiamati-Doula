  
import os
from flask_admin import Admin


from .models import db, Users, UserData, UserRol, ServiceType, Service, Document, ServiceRols, ServiceDocuments, ServiceHired, ServiceToService, UserFaq, BusinessFaq, BirthplanForm, Appointment, CalendarAvailability, BirthplanSection, BirthplanAnswer, BirthplanComment


from flask_admin.contrib.sqla import ModelView

def setup_admin(app):
    app.secret_key = os.environ.get('FLASK_APP_KEY', 'sample key')
    app.config['FLASK_ADMIN_SWATCH'] = 'cerulean'
    admin = Admin(app, name='ADMIN', template_mode='bootstrap3')

    class MyModel(ModelView):
        column_display_pk=True
    # Add your models here, for example this is how we add a the User model to the admin

    
    admin.add_view(MyModel(Users, db.session)),
    admin.add_view(MyModel(UserData, db.session))
    admin.add_view(MyModel(UserRol, db.session))
    admin.add_view(MyModel(ServiceType, db.session))
    admin.add_view(MyModel(Service, db.session))
    admin.add_view(MyModel(Document, db.session))
    admin.add_view(MyModel(ServiceRols, db.session))
    admin.add_view(MyModel(ServiceHired, db.session))
    admin.add_view(MyModel(ServiceToService, db.session))
    admin.add_view(ModelView(Appointment, db.session))
    admin.add_view(ModelView(CalendarAvailability, db.session))
    admin.add_view(MyModel(UserFaq, db.session))
    admin.add_view(MyModel(BusinessFaq, db.session))
    admin.add_view(MyModel(BirthplanForm, db.session))
    admin.add_view(MyModel(BirthplanSection, db.session))
    admin.add_view(MyModel(BirthplanAnswer, db.session))
    admin.add_view(MyModel(BirthplanComment, db.session))




    # You can duplicate that line to add mew models
    # admin.add_view(ModelView(YourModelName, db.session))