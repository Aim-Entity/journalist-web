from django.urls import path, include
from . import views

name_space = "join"
urlpatterns = [
    path("", views.index, name="join-index")
]
