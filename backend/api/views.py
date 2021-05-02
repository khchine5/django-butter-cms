from butter_cms import ButterCMS
from django.conf import settings
from django.http import JsonResponse
from django.views.decorators.cache import never_cache
from django.views.generic import TemplateView

# Serve Vue Application
index_view = never_cache(TemplateView.as_view(template_name="index.html"))


def get_butter_instance():
    return ButterCMS(settings.BUTTER_CMS_AUTH_TOKEN)


def get_all_posts(request):
    butter = get_butter_instance().posts.all()
    return JsonResponse(butter)


def get_post(request, slug):
    butter = get_butter_instance().posts.get(slug)
    return JsonResponse(butter)
