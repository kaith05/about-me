from django.contrib import admin
from django.urls import path
from django.views.generic import TemplateView

urlpatterns = [
    path('admin/', admin.site.urls),
    # トップページ (index.html)
    path('', TemplateView.as_view(template_name='index.html'), name='index'),
    # 紹介ページ (about-me.html)
    path('about-me/', TemplateView.as_view(template_name='about-me.html'), name='about-me'),
    # お問い合わせ (contact.html)
    path('contact/', TemplateView.as_view(template_name='contact.html'), name='contact'),
    # よくある質問 (faq.html)
    path('faq/', TemplateView.as_view(template_name='faq.html'), name='faq'),
    # リメイクページ (remake.html)
    path('remake/', TemplateView.as_view(template_name='remake.html'), name='remake'),
]