from django.shortcuts import render
from django.http import HttpResponse, JsonResponse

def posts(request):
    if request.method == 'GET':
        start = int(request.GET.get("start"))
        end = int(request.GET.get("end"))
        data = []
        for i in range(start, end+1):
            data.append(f"Post #{i}")

        return JsonResponse({
            "posts": data
        })
    else:
        return HttpResponse("Hello.")

def index(request):
    return render(request, "api/index.html")