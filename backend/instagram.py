from flask import Blueprint, render_template, abort
from jinja2 import TemplateNotFound

instagram_blueprint = Blueprint('instagram', __name__, template_folder='templates')


@instagram_blueprint.route('/')
def show():
    try:
        return render_template('instagram.html')
    except TemplateNotFound:
        abort(404)
