from flask import Flask, render_template
from backend.index import index

app = Flask(__name__)
app.static_folder = "static"
app.register_blueprint(index, url_prefix='/index')


@app.route('/')
def index():
    return render_template('index.html')


if __name__ == "__main__":
    app.run()
