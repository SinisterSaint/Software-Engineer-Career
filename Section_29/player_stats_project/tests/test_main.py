import unittest
from flask import Flask
from models import db, PlayerStats

class MyTestCase(unittest.TestCase):
    def setUp(self):
        app = Flask(__name__)
        app.config["SQLALCHEMY_DATABASE_URI"] = "postgresql://your_user:your_password@your_host:your_port/your_database"
        app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False
        db.init_app(app)
        with app.app_context():
            db.create_all()
        self.app = app.test_client()

    def tearDown(self):
        with self.app.app_context():
            db.session.remove()
            db.drop_all()

    def test_search_player_stats(self):
        response = self.app.post("/", data={"player_name": "LeBron"})
        self.assertEqual(response.status_code, 200)

    def test_search_player_stats_no_results(self):
        response = self.app.post("/", data={"player_name": "Invalid"})
        self.assertEqual(response.status_code, 200)
        self.assertIn(b"No results found.", response.data)

if __name__ == '__main__':
    unittest.main()
