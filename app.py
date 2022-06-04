from flask import Flask, render_template, abort
from flask_navigation import Navigation
from jinja2 import TemplateNotFound

from backend.index import index_blueprint
from backend.instagram import instagram_blueprint
from backend.shares import shares_blueprint
from backend.spotify import spotify_blueprint
from backend.text_to_speech import text_to_speech_blueprint
from backend.wiki import wiki_blueprint

app = Flask(__name__)
app.static_folder = "static"
app.register_blueprint(index_blueprint, url_prefix='/index')
app.register_blueprint(shares_blueprint, url_prefix='/test')
app.register_blueprint(instagram_blueprint, url_prefix='/instagram')
app.register_blueprint(spotify_blueprint, url_prefix='/spotify')
app.register_blueprint(wiki_blueprint, url_prefix='/wiki')
app.register_blueprint(text_to_speech_blueprint, url_prefix='/texttospeech')

nav = Navigation(app)

nav.Bar('top', [
    nav.Item('Home', 'index.show'),
    nav.Item('Aktien', 'shares.show'),
    nav.Item('Instagram', 'instagram.show'),
    nav.Item('Spotify', 'spotify.show'),
    nav.Item('Text to speech', 'text_to_speech.show'),
    nav.Item('Wiki', 'wiki.show'),
])


@app.route('/')
def show():
    try:
        return render_template('index.html')
    except TemplateNotFound:
        abort(404)


if __name__ == "__main__":
    app.run(debug=True)
