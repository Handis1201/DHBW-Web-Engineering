from flask import Blueprint, render_template, abort
from jinja2 import TemplateNotFound

wiki_blueprint = Blueprint('wiki', __name__, template_folder='templates')


@wiki_blueprint.route('/')
def show():
    try:
        return render_template('wiki.html')
    except TemplateNotFound:
        abort(404)
