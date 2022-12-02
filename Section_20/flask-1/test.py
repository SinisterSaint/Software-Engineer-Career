from unittest import TestCase
from app import app
import CurrenyRates
from flask import session

class FlaskTests(TestCase):
    # Write Tests for every function / feature
    def setUp(self):
        """Stuff to do before every test"""

        self.client = app.test_client()
        app.config['TESTING'] = True

    def test_homepage(self):
        # Make sure the forex converter is working
        with self.client:
            res = self.client('/')