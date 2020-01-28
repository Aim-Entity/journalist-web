from . import views
from django.urls import path

name_space = "landing"

urlpatterns = [
    path("", views.index, name="index")
]
