import unittest
from flask import Flask
from app import create_app

class TestApp(unittest.TestCase):
    def setUp(self):
        self.app = create_app()
        self.app.config['TESTING'] = True
        self.client = self.app.test_client()
        
    def tearDown(self):
        pass
      
    def test_index(self):
        response = self.client.get('/')
        self.assertEqual(response.status_code, 200)
        
if __name__ == '__main__':
    unittest.main()
