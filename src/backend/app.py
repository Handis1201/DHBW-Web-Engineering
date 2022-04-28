from flask import Flask, request

app = Flask(__name__)


@app.route("/test")
def test():
    return "Test"

@app.route("/")
def init():
    return "Hello"


if __name__ == "__main__":
    app.run()