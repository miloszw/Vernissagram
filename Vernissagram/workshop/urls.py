from django.conf.urls import patterns, url

urlpatterns = patterns('workshop.views',
    url(r'^$', 'create')
)
