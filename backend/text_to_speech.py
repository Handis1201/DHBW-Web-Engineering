from flask import Blueprint, render_template, abort
from jinja2 import TemplateNotFound

text_to_speech_blueprint = Blueprint('text_to_speech', __name__, template_folder='templates')


@text_to_speech_blueprint.route('/')
def show():
    try:
        return render_template('text_to_speech.html')
    except TemplateNotFound:
        abort(404)
