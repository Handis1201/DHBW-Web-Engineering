import requests as requests
from flask import Blueprint, render_template, abort
from jinja2 import TemplateNotFound

CLIENT_ID = '1b287e024b644aad8945f236d5a14406'
CLIENT_SECRET = 'e085baaffca74af3b8b5daad31211253'
AUTH_URL = 'https://accounts.spotify.com/api/token'
BASE_SHOW_URL = 'https://api.spotify.com/v1/shows/'

SHOW_ID = '3jtLk2Zlutfjo91QZYXmlA'

spotify_blueprint = Blueprint('spotify', __name__, template_folder='templates')


@spotify_blueprint.route('/')
def show():
    try:
        return render_template('spotify.html')
    except TemplateNotFound:
        abort(404)


def getPodcasts(access_token):
    headers = {
        'Authorization': 'Bearer {token}'.format(token=access_token)
    }
    print(headers)
    spotify_response = requests.get(BASE_SHOW_URL + SHOW_ID + '/episodes?market=DE', headers=headers)
    print(spotify_response)
    spotify_response_json = spotify_response.json()
    print(spotify_response_json)
    return spotify_response_json


@spotify_blueprint.route('/request')
def request():
    auth_response = requests.post(AUTH_URL, {
        'grant_type': 'client_credentials',
        'client_id': CLIENT_ID,
        'client_secret': CLIENT_SECRET,
    })

    # convert the response to JSON
    auth_response_data = auth_response.json()

    # save the access token
    access_token = auth_response_data['access_token']
    print(access_token)
    response = getPodcasts(access_token)
    print("Request get")
    return (response)
