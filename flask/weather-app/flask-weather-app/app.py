from flask import Flask, render_template, request

app = Flask(__name__)


@app.route('/', methods=['GET', 'POST'])

def weather():

    result = ""

    # WEATHER DATA

    weather_data = {

        "Mumbai": "32°C, Sunny",

        "Delhi": "28°C, Cloudy",

        "Pune": "25°C, Rainy",

        "Chennai": "31°C, Humid",

        "Bangalore": "24°C, Pleasant"

    }

    if request.method == 'POST':

        city = request.form['city']

        result = weather_data.get(
            city,
            "Weather Not Available"
        )

    return render_template(
        'index.html',
        result=result
    )


if __name__ == '__main__':

    app.run(debug=True)