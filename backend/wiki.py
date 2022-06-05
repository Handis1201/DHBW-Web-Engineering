import json

import wikipediaapi
from flask import Blueprint, render_template, abort, request
from jinja2 import TemplateNotFound

wiki_blueprint = Blueprint('wiki', __name__, template_folder='templates')

wiki = wikipediaapi.Wikipedia('de')


@wiki_blueprint.route('/')
def show():
    try:
        return render_template('wiki.html')
    except TemplateNotFound:
        abort(404)


@wiki_blueprint.route('/request')
def wikiRequest():
    string = request.args.get("string")
    page = wiki.page(string)
    if page.exists():
        data = {"text": page.text[0:300], "link": page.fullurl}
        json_dump = json.dumps(data)
        loads = json.loads(json_dump)
        print(loads)
        return loads
