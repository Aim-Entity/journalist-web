from django.urls import path
from . import views

name_space = "about"

urlpatterns = [
    path("", views.index, name="about-index"),
]
