"Flask App for Sports Database"
from flask import Flask, request, json, render_template, redirect, jsonify, flash, session, g, abort
# from flask_debugtoolbar import DebugToolbarExtension
from models import db, connect_db, NBAdatabase, Players, User
from forms import UserAddForm, UserEditForm, LoginForm, MessageForm

from sqlalchemy.exc import IntegrityError


CURR_USER_KEY = "curr_user"

app = Flask(__name__) 
app.app_context().push()


app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql:///sportsdatabase'
app.config['SECRET_KEY'] = "thesecretkey"
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['SQLALCHEMY_ECHO'] = False
app.config['DEBUG_TB_INTERCEPT_REDIRECTS'] = True
app.config['TEMPLATES_AUTO_RELOAD'] = True

connect_db(app)
db.create_all()

# Create a login and register check
# Create profile route oprional
# Create stats route(Stats.html)
# Create get route for retrieving data from nba.com

print('py')

# Nikola Jokić
career = playercareerstats.PlayerCareerStats(player_id='203999') 
print(career.get_json())


@app.route("/")
def root():
    """Render Homepage"""
    
    return render_template("home.html")

@app.route('/stats/<id>', methods=["GET"])
def stats(id):
    """retrive stats """
    # Nikola Jokić
    career = playercareerstats.PlayerCareerStats(player_id=id) 
    print(career.get_json())
    return render_template('home.html')
    


@app.before_request
def add_user_to_g():
    """If we're logged in, add curr user to Flask global."""

    if CURR_USER_KEY in session:
        g.user = User.query.get(session[CURR_USER_KEY])

    else:
        g.user = None


def do_login(user):
    """Log in user."""

    session[CURR_USER_KEY] = user.id


def do_logout():
    """Logout user."""

    if CURR_USER_KEY in session:
        del session[CURR_USER_KEY]

@app.route('/signup', methods=["GET", "POST"])
def signup():
    """Handle user signup.

    Create new user and add to DB. Redirect to home page.

    If form not valid, present form.

    If the there already is a user with that username: flash message
    and re-present form.
    """
    if CURR_USER_KEY in sso:
        del session[CURR_USER_KEY]
    form = UserAddForm()

    if form.validate_on_submit():
        try:
            user = User.signup(
                username=form.username.data,
                password=form.password.data,
                email=form.email.data,
                image_url=form.image_url.data or User.image_url.default.arg,
            )
            db.session.commit()

        except IntegrityError as e:
            flash("Username already taken", 'danger')
            return render_template('users/signup.html', form=form)

        do_login(user)

        return redirect("/")

    else:
        return render_template('users/signup.html', form=form)

@app.route('/login', methods=["GET", "POST"])
def login():
    """Handle user login."""

    form = LoginForm()

    if form.validate_on_submit():
        user = User.authenticate(form.username.data,
                                 form.password.data)

        if user:
            do_login(user)
            flash(f"Hello, {user.username}!", "success")
            return redirect("/")

        flash("Invalid credentials.", 'danger')

    return render_template('users/login.html', form=form)

@app.route('/logout')
def logout():
    """Handle logout of user."""

    do_logout()

    flash("You have successfully logged out.", 'success')
    return redirect("/login")
