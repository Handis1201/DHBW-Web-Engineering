from flask import Blueprint, render_template, abort
from jinja2 import TemplateNotFound

index_blueprint = Blueprint('index', __name__, template_folder='templates')


@index_blueprint.route('/')
def show():
    try:
        return render_template('index.html')
    except TemplateNotFound:
        abort(404)
