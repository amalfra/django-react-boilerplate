
from django.http import JsonResponse
from django.views.generic import View


class Home(View):
    def get(self, request, *args, **kwargs):
        return JsonResponse({'status': 'ok'})

    def post(self, request, *args, **kwargs):
        return JsonResponse({'status': 'posted'})
