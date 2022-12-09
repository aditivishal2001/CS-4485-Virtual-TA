from flask import Flask, jsonify, render_template, request
from chat.chat import chatting
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

def get_response(text):
    import re
    import math
    print(text)
    ln = re.search(r'ln\(\<span contenteditable="false">(\w+)</span>\)', text)
    if ln:
        return "ln(<span contenteditable='false'>{}</span>) = {}".format(str(ln.group(1)), str(math.log(int(ln.group(1)))))

    log = re.search(r'log<sub contenteditable="false">(\w+)</sub>\(<span contenteditable="false">(\w+)</span>\)', text)
    if log:
        print(log)
        return "log<sub contenteditable='false'>{}</sub>(<span contenteditable='false'>{}</span>)  = {}".format(str(log.group(1)), str(log.group(2)), str(math.log(int(log.group(2)), int(log.group(1)))))

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
    sum = re.search(r'<span style="position:relative"><span style="font-size: 25px;" class="input otherinput">∑</span><sub style="height: 15px;margin-left: -14px;position:absolute;top: -20px;" contenteditable="false">(\w+)</sub><sup style="height: 16px;margin-top: 38px;margin-left: -14px;position:absolute;bottom: -14px;" contenteditable="false">i=(\w+)</sup> <span style="font-size: 25px;">\( <span contenteditable="false">(\w+)</span>i\+<span contenteditable="false">(\w+)</span> \)</span></span>', text)
    if sum:
        result = 0
        limit = int(sum.group(1))
        initial = int(sum.group(2))
        first = int(sum.group(3))
        second = int(sum.group(4))
        for i in range(initial,limit+1):
            hold = (first * i) + second
            result += hold
        return "{} = {}".format(text, result)




    return ""
@app.post('/predict')
def predict():
    text = request.get_json().get("message")

    if get_response(text) != '':
        response = get_response(text)
    else:
        response = chatting(text)
    message = {"answer": response}
    return jsonify(message)


if __name__ == "__main__":
    app.run(debug=True)
