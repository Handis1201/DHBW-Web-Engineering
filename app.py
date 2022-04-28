from flask import Flask, request, render_template

app = Flask(__name__)


@app.route("/test/<name>")
def test(name):
    return "Test " + name


@app.route("/index")
@app.route("/")
def init():
    return render_template("index.html")


if __name__ == "__main__":
    app.run()
