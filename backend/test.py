from flask import Blueprint, render_template, abort
from jinja2 import TemplateNotFound

test_blueprint = Blueprint('test', __name__, template_folder='templates')


@test_blueprint.route('/')
def show():
    try:
        return render_template('test.html')
    except TemplateNotFound:
        abort(404)
