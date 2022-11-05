from flask import Flask, jsonify, render_template, request

#from chat import get_response

app = Flask(__name__)


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
    print(1)
    return render_template('about.html')


@app.post('/predict')
def predict():
    text = request.get_json().get("message")
    #response = get_response(text)
    message = {"answer": response}
    return jsonify(message)


if __name__ == "__main__":
    app.run(debug=True)
