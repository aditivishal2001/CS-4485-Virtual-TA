from flask import Flask, jsonify, render_template, request, redirect
import re
from difflib import SequenceMatcher
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate, migrate
#from chat import get_response
import os

app = Flask(__name__)
app.debug = True
app.config['SESSION_TYPE'] = 'filesystem'
app.secret_key = os.urandom(24)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///database.db'
db = SQLAlchemy(app)
migrate = Migrate(app, db)

class Posts(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(20), unique=False, nullable=False)
    text = db.Column(db.Text(), unique=False, nullable=False)
    def __repr__(self):
        return f"Title : {self.title}"
@app.route('/')
def home():
    return render_template('index.html')


@app.route('/contact')
def contact():
    return render_template('contact.html')


@app.route('/resources')
def resources():
    return render_template('resources.html')


@app.route('/about')
def about():
    return render_template('about.html')

@app.route('/add', methods=["POST", "GET"])
def add():

    # In this function we will input data from the
    # form page and store it in our database.
    # Remember that inside the get the name should
    # exactly be the same as that in the html
    # input fields
    if request.method == 'POST':
        title = request.form.get("title")
        text = request.form.get("text")
        if title != '' and text != '':
            p = Posts(title=title, text=text)
            db.session.add(p)
            db.session.commit()
            return redirect('/add')
    posts = Posts.query.all()
    return render_template('add.html', posts=posts)

@app.route('/delete/<int:id>')
def erase(id):
    # Deletes the data on the basis of unique id and
    # redirects to home page
    data = Posts.query.get(id)
    db.session.delete(data)
    db.session.commit()
    return redirect('/add')


expression = ["what's", "what","is","you","your","?","define"]

def get_response(text):
    import re
    import math
    ln = re.search(r'ln\(\<span contenteditable="false">(\w+)</span>\)', text)
    if ln:
        return "ln(<span contenteditable='false'>{}</span>) = {}".format(str(ln.group(1)), str(math.log(int(ln.group(1)))))

    log = re.search(r'log<sub contenteditable="false">(\w+)</sub>', text)
    if log:
        return "log<sub contenteditable='false'>{}</sub> = {}".format(str(log.group(1)), str(math.log(int(log.group(1)), 10)))

    expo = re.search('e<sup contenteditable="false">(\w+)</sup>', text)
    if expo:
        return "e<sup contenteditable='false'>{}</sup> = {}".format(str(expo.group(1)), str(math.exp(int(expo.group(1)))))
    power = re.search('<span contenteditable="false">(\w+)</span><sup contenteditable="true">(\w+)</sup>', text)
    if power:
        return "<span contenteditable='false'>{}</span><sup contenteditable='true'>{}</sup> = {}".format(str(power.group(1)), str(power.group(2)), str(math.pow(int(power.group(1)), int(power.group(2)))))
    powertow = re.search('<span contenteditable="false">(\w+)</span><sup>2</sup>', text)
    if powertow:
        return "<span contenteditable='false'>{}</span><sup contenteditable='true'>2</sup> = {}".format(str(powertow.group(1)), str(math.pow(int(powertow.group(1)), 2)))
    pi = re.search('π ', text)
    if pi:
        return "π = {}".format(str(math.pi))
    greater = re.search('(\w+)\s+?≥\s+?(\w+)', text)
    if greater:
        return "{} ≥ {} = {}".format(str(greater.group(1)),str(greater.group(2)), str(greater.group(1) >= greater.group(2)))
    lesser = re.search('(\w+)\s+?≤\s+?(\w+)', text)
    if lesser:
        return "{} ≤ {} = {}".format(str(lesser.group(1)),str(lesser.group(2)), str(lesser.group(1) <= lesser.group(2)))

    new = text.split()
    print(new)
    dbs = Posts.query.all()

    for item in dbs:
        for word in new:
            if word not in expression:
                if SequenceMatcher(None, item.title, word).ratio() > 0.7:
                    return "{}: {}".format(item.title, item.text)

    return "We couldn't find what yo uare looking for"

@app.post('/predict')
def predict():
    text = request.get_json().get("message")
    print(text)
    response = get_response(text)
    message = {"answer": response}
    return jsonify(message)


if __name__ == "__main__":
    app.run(debug=True)
