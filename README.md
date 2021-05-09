# Django Kickstart

### Basic REST API
* python3 -m pip install pipenv
* pipenv shell
* pipenv install django djangorestframework django-rest-knox
* django-admin startproject leadmanager
* cd leadmanager
* python manage.py startapp leads
* python manage.py makemigrations leads
* python manage.py migrate
* python manage.py runserver