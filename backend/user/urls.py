from django.urls import path
from user import views
from django.views.decorators.csrf import csrf_exempt
app_name = "user"

urlpatterns = [
    path('register/', views.register, name='register'),  # 회원가입을 처리하는 url
    path("login/", views.login, name="login"),
    path("logout/", views.logout, name="logout"),
    path('get-csrf-token/', csrf_exempt(views.get_csrf_token), name='get_csrf_token'),
    path('check-login/', views.check_login,
         name='check-login'),  # 어느 앱에서나 접근 가능
]
