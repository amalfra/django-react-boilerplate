import os

from .base import *

ALLOWED_HOSTS += ['localhost']
DEBUG = True

WSGI_APPLICATION = 'src.wsgi.dev.application'

CORS_ALLOWED_ORIGINS = [
    'http://localhost:3000',
]

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.sqlite3',
        'NAME': os.path.join(BASE_DIR, 'db.sqlite3'),
    }
}
