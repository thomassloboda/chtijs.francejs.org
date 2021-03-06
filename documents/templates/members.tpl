{% extends 'layout.tpl' %}

{% block body %}
{{ content | safe }}
<section class="main-members">
  {% for member in members %}
    <article class="main-members__member">
        <img class="pict" src="{{ member.avatar_url }}"/>
        <div class="link">
          <a href="{{ member.html_url }}" target="__blank">
            {{ member.login }}&nbsp;&nbsp;-&nbsp;&nbsp; {{ member.name }}
          </a>
	  <p>{{ member.bio }}</p>
        </div>
        <div class="clr"></div>
    </article>
  {% endfor %}
</section>
{% endblock %}
