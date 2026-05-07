from flask import Flask, render_template, request

app = Flask(__name__)


@app.route('/', methods=['GET', 'POST'])

def bmi():

    result = ""

    if request.method == 'POST':

        weight = request.form.get('weight')

        height = request.form.get('height')

        weight_unit = request.form.get('weight_unit')

        height_unit = request.form.get('height_unit')


        weight = float(weight)

        height = float(height)


        # WEIGHT CONVERSION

        if weight_unit == "lbs":

            weight = weight * 0.453592


        # HEIGHT CONVERSION

        if height_unit == "cm":

            height = height / 100

        elif height_unit == "feet":

            height = height * 0.3048


        # BMI CALCULATION

        bmi_value = weight / (height * height)

        result = f"Your BMI is {round(bmi_value, 2)}"


    return render_template(
        'index.html',
        result=result
    )


if __name__ == '__main__':

    app.run(debug=True)