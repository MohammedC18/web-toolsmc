from flask import Flask, render_template, request

app = Flask(__name__)


@app.route('/', methods=['GET', 'POST'])

def home():

    result = ""

    if request.method == 'POST':

        username = request.form['username']

        comment = request.form['comment']


        # SQL INJECTION DEMO

        if "' OR '1'='1" in username:

            result = "SQL Injection Successful"


        # XSS DEMO

        else:

            result = comment


    return render_template(
        'index.html',
        result=result
    )


if __name__ == '__main__':

    app.run(debug=True)
