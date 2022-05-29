from flask import Flask, render_template, abort
from flask_navigation import Navigation
from jinja2 import TemplateNotFound

from backend.index import index_blueprint
from backend.test import test_blueprint

app = Flask(__name__)
app.static_folder = "static"
app.register_blueprint(index_blueprint, url_prefix='/index')
app.register_blueprint(test_blueprint, url_prefix='/test')

nav = Navigation(app)

nav.Bar('top', [
    nav.Item('Home', 'index.show'),
    nav.Item('Test', 'test.show'),
])

@app.route('/')
def show():
    try:
        return render_template('index.html')
    except TemplateNotFound:
        abort(404)

if __name__ == "__main__":
    app.run(debug=True)

#base.html inside <li...>
#class="{{ 'active' if item.is_active else '' }}"
