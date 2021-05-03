"""project URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/2.1/topics/http/urls/
"""

from django.contrib import admin
from django.urls import path

from .api.views import get_all_posts, get_main_post, get_post, index_view

urlpatterns = [
    path("api/posts/", get_all_posts, name="get-all-posts"),
    path("api/main-post/", get_main_post, name="get-main-post"),
    path("api/post/<slug:slug>", get_post, name="get-all-posts"),
    path("", index_view, name="index"),
    path("api/admin/", admin.site.urls),
]
