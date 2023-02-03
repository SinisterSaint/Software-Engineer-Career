from flask import Flask, render_template, request, flash
from flask_debugtoolbar import DebugToolbarExtension
import currency

app = Flask(__name__)
app.config['SECRET_KEY'] = "abc123"

debug = DebugToolbarExtension(app)


def safe_convert_to_float(s):
    """Convert to float or return None.

        >>> safe_convert_to_float("1.2")
        1.2

        >>> safe_convert_to_float("hello") is None
        True
    """

    try:
        return float(s)

    except ValueError:
        return None


@app.route("/")
def show_form():
    """Show conversion form."""

    return render_template("Form.html")


@app.route("/convert")
def handle_form():
    """Handle conversion form."""

    code_from = request.args['code_from'].upper()
    code_to = request.args['code_to'].upper()
    amt = safe_convert_to_float(request.args['amt'])
    errs = []

    if amt is None:
        errs.append("Not a valid amount.")

    if not currency.check_currency_code(code_from):
        errs.append(f"Not a valid code: {code_from}")

    if not currency.check_currency_code(code_to):
        errs.append(f"Not a valid code: {code_to}")

    if not errs:
        result = currency.convert_to_pretty(code_from, code_to, amt)
        if result is None:
            errs.append("Conversion failed.")

    if errs:
        for err in errs:
            flash(err)
        return render_template("form.html",
                               code_from=code_from,
                               code_to=code_to,
                               amt=amt or "")

    else:
        return render_template("results.html", result=f"{result}")
