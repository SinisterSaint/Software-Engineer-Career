from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

def connect_to_db(app, config_class=None):
    """Connect to DB and create tables if not exist"""
    
    if config_class:
        app.config.from_object(config_class)
    
    db.app = app
    db.init_app(app)
    db.create_all()
