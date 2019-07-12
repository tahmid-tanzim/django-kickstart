# Django Kickstart

### Basic REST API
* pip3 install pipenv
* pipenv shell
* pipenv install django djangorestframework django-rest-knox
* django-admin startproject leadmanager
* cd leadmanager
* python manage.py startapp leads
* python manage.py makemigrations leads
* python manage.py migrate
* python manage.py runserver