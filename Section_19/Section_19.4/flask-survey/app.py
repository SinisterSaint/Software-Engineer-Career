from http.client import responses
from flask import Flask, session, request, render_template, redirect, make_response, flash
from flask_debugtoolbar import DebugToolbarExtension
from surveys import surveys 

# key names should be used to store information within the session

CURRENT_SURVEY_KEY = 'current_survey'
RESPONSES_KEY = 'responses'

app = Flask(__name__)
app.config['SECRET_KEY'] = "never-tell!"
app.config['DEBUG_TB_INTERCEPT_REDIRECTS'] = False

debug = DebugToolbarExtension(app)

@app.route("/")
def reveal_pick_survey_form():
    """reveal pick-a-survey form."""

    return render_template("pick-survey.html", surveys=surveys)

@app.route("/", methods=["POST"])
def pick_survey():
    """Pick a survey."""

    survey_id = request.form['survey_code']

    #Create an if statement that prevents the use from retaking a survey until cookie times out
    if request.cookies.get(f"competed_{survey_id}"):
        return render_template

    survey = surveys[survey_id]
    session[CURRENT_SURVEY_KEY] = survey_id

    return render_template("survey_start.html", survey=survey)

@app.route("/begin", methods=["POST"])
def start_survey():
    """Clear the responses in the session"""

    session[RESPONSES_KEY] = []

    return redirect("/question/0")

@app.route("/answer", methods=["POST"])
def handle_question():
    """Save survey response and then redirect to next question"""

    choice = request.form['answer']
    text = request.form.get("text", "")

    # add response to the list in the session
    session[RESPONSES_KEY] = responses
    survey_code = session[CURRENT_SURVEY_KEY]
    survey = surveys[survey_code]

    if (len(responses) == len(survey.questions)):
        # Quesions are answered. Thank user for completing the survey
        return redirect("/complete")

    else:
        return redirect(f"/questoins/{len(responses)}")


@app.route("/questions/<int:qid>")
def show_question(qid):
    """Reveal current question."""

    responses = session.get(RESPONSES_KEY)
    survey_code = session[CURRENT_SURVEY_KEY]
    survey = surveys[survey_code]

    if (responses is None):
        # if user tries to access question page too soon
        return redirect("/")

    if (len(responses) == len(survey.questions)):
        # if user has completed all the qiestions thank them
        return redirect("/complete")

    if (len(responses) != qid):
        # Trying to access questions out of order.
        flash(f"Invalid question id: {qid}.")
        return redirect(f"/questions/{len(responses)}")

    question = survey.questions[qid]

    return render_template(
        "question.html", question_num=qid, question=question)


@app.route("/complete")
def say_thanks():
    """Thank user and list responses."""

    survey_id = session[CURRENT_SURVEY_KEY]
    survey = surveys[survey_id]
    responses = session[RESPONSES_KEY]

    html = render_template("completion.html",
                           survey=survey,
                           responses=responses)

    # Set cookie noting this survey is done so they can't re-do it
    response = make_response(html)
    response.set_cookie(f"completed_{survey_id}", "yes", max_age=60)
    return response

