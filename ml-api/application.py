import os
import sys

from flask import Flask, jsonify, make_response, redirect, request
from flask_cors import CORS

basedir = os.path.abspath(os.path.dirname(__file__))

application = Flask(__name__)
CORS(application)

application.debug = True

if os.environ.get('ENV') is None:
    application.debug = True
elif os.environ.get('ENV') == 'prod':
    application.debug = False


@application.route('/test')
def health():
    return "Success"

if __name__ == '__main__':
    application.run(host="0.0.0.0", port=5000)
