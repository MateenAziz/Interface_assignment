
from django.urls import path
from . import views

urlpatterns = [
    path('products/',views.getDataCatelogs),
    path('products/<int:id>',views.getDataCatelog),
        #create user endpoint
    path('signup/', views.register, name='signup'),
]