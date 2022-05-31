from flask import Blueprint, render_template, abort
from jinja2 import TemplateNotFound

shares_blueprint = Blueprint('shares', __name__, template_folder='templates')


@shares_blueprint.route('/')
def show():
    try:
        return render_template('shares.html')
    except TemplateNotFound:
        abort(404)
