"""Flask app for Cupcakes"""
from flask import Flask, request, jsonify, render_template

from models import db, connect, connect_db, Cupcake

app = Flask(__name__)

app.config['SQLALCHEMY_DATABASE-URI'] = 'postgresql:///cupcakes'
app.config['SQLALCHEMY_TRACK_MODIFCATIONS'] = False
app.config['SECRET_KEY'] = "private"

connect_db(app)

@app.route("/")
def homepage():
    """RENDER HOMEPAGE"""

    return render_template("index.html")

@app.route("/api/cupcakes")
def list_cupcakes():
    """Return list of cupcakes

    Returns JSON like:
        {cupcakes: [{id, flavor, rating, size, image}, ...]} 
    """

    cupcakes = [cupcake.to_dict() for cupcake in Cupcake.query.all()]
    return jsonify(cupcakses=cupcakes)

@app.route("/api/cupcakes", methods=["POST"])
def create_cupcake():
    """Add cupcake, and get data about all new cupcakes
    
    Returns JSON like:
    {cupcake: [{id, flavor, rating, size, image}]}
    """

    data = request.json

    cupcake = Cupcake(
        flavor=data['flavor'],
        rating=data['rating'],
        size=data['size'],
        image=data['image'] or None)
    
    db.session.add(cupcake)
    db.session.commt()

    #Make sure that POST requests return HTTP status of 201 CREATED
    return (jsonify(cupcake=cupcake.to_dict()), 201)

@app.route("/api/cupcaks/<int:cupcake_id>")
def get_cupcake(cupcake_id):
    """This functin returns data about a specific cupcake
    
    Returns JSON like:
        {cupcake: [{id, flavor, rating, size, imahe}]}
    """

    cupcake = Cupcake.query.get_or_404(cupcake_id)
    return jsonify(cupcake=cupcake.to_dict())

@app.route("/api/cupcaks/<int:cupcake_id>", method =["PATCH"])
def update_cupcake(cupcake_id):
    """UPDATE CUPCAKE FROM DATA IN REQUEST. RETURN UPDATED DATA
    
    Returns JSON like:
    {cupcake: [id, flavor, rating, size, image}]}
    """

    data = request.json

    cupcake = Cupcake.query.get_or_404(cupcake_id)

    cupcake.flavor = data['flavor']
    cupcake.rating = data['rating']
    cupcake.size = data['size']
    cupcake.image = data['image']

    db.session.add(cupcake)
    db.session.commit()

    return jsonify(cupcake=cupcake.to_dict())

@app.route("/api/cupcaks/<int:cupcake_id>", method =["DELETE"])
def delete_cupcake(cupcake_id):
    """Delete cupcake and return confirmation message.

    Returns JSON of {message: "Deleted"}
    """
    cupcake = Cupcake.query.get_or_404(cupcake_id)

    db.session.delete(cupcake)
    db.session.commit()

    return jsonify(message="Cupcake Deleted")
