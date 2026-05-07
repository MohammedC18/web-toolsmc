from flask import Flask, render_template, request

app = Flask(__name__)


@app.route('/', methods=['GET', 'POST'])

def feedback():

    message = ""

    if request.method == 'POST':

        name = request.form['name']

        feedback = request.form['feedback']

        message = f"Thank You {name} for your feedback!"

    return render_template(
        'index.html',
        message=message
    )


if __name__ == '__main__':

    app.run(debug=True)