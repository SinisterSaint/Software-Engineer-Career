from flask import Flask
from .views import main, user
from .db import connect_to_db
from .config import set_config, TestConfig
from flask_login import LoginManager

def create_app(testing=False):
    app = Flask(__name__)
    set_config(app)
    
    login_manager = LoginManager(app)
    
    
    with app.app_context():  
        connect_to_db(app, TestConfig if testing else None)
        
        login_manager.login_view = 'user.login'
        login_manager.login_message = 'Please log in to access this page.'
        
        from app.models.user_model import User
        
        @login_manager.user_loader
        def load_user(user_id):
            return User.query.get(int(user_id))
        
        app.register_blueprint(main)
        app.register_blueprint(user)
        
        return app
  
app = create_app()
