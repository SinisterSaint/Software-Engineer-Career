from flask import Flask, render_template, request, session, jsonify

import requests
import CurrenyRates

app = Flask(__name__)

@app.route('/', methods=['GET', 'POST'])
def homepage():
    return render_template('index.html')

@app.route('/conversion', methods=['get', 'post'])
def conversion():
    converting_from_input = request.form.get('converting_from_input', '')
    converting_to_input = request.form.get('converting_to_input', '')

    if converting_from_input and converting_to_input in ['EUR', 'CHF', 'CAD', 'GBP', 'AUD', 'NZD', 'JPY']:
        forex_currency_converter = CurrenyRates
        res = forex_currency_converter.res

        res = jsonify([{'value': res['data'][x]['value'] * float(converting_from_input), 'code': x} for x in res['data'].keys()])
        res.headers.add("Access-Control-Allow-Origin", "*")

        return res
    return render_template('index.html')
       
if request.method == "POST":
    # Choosing Currenceis 
    converting_from = request.form.get("currency")
    converting_to = request.form.get("currency")

    print(f"You are converting {converting_from} to {converting_to}!")
