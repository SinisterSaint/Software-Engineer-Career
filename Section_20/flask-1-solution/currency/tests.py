"""Tests for currency converter."""


from unittest import TestCase

from app import app


class CurrencyConvertedTestCase(TestCase):
    def setUp(self):
        self.client = app.test_client()

    def test_form_shows(self):
        """Test that form appears."""

        resp = self.client.get("/")
        self.assertIn(b'<form', resp.data)

    def test_form_failures(self):
        """Test conversion failures."""

        resp = self.client.get("/convert",
                               query_string={"code_from": "MUPPET",
                                             "code_to": "BLARGH",
                                             "amt": "glumph"})
        self.assertIn(b'Not a valid amount', resp.data)
        self.assertIn(b'Not a valid code: MUPPET', resp.data)
        self.assertIn(b'Not a valid code: BLARGH', resp.data)

    def test_conversion(self):
        """Test conversion."""

        # It's difficult to test conversion, given that rates
        # vary---so let's convert USD to USD

        resp = self.client.get("/convert",
                               query_string={"code_from": "USD",
                                             "code_to": "USD",
                                             "amt": "1.55"})
        self.assertIn(b'$ 1.55', resp.data)
