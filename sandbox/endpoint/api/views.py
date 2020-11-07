from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
import time

def posts(request):
    if request.method == 'GET':
        start = int(request.GET.get("start") or 0)
        end = int(request.GET.get("end") or (start + 9))
        data = []
        for i in range(start, end+1):
            data.append(f"Post #{i}")
        time.sleep(1)
        return JsonResponse({
            "posts": data
        })
    else:
        return HttpResponse("Hello.")

def index(request):
    return render(request, "api/index.html")