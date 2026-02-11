---
layout: blog
title: Blog
subtitle: Tips, updates, and season-ready financial guidance for minor hockey treasurers.
permalink: /blog/
---

<div class="grid two">
  {% for post in site.posts %}
    <article class="info-card">
      <h3><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h3>
      {% assign created_at = post.created | default: post.date %}
      <div class="content-meta">
        <span>Created {{ created_at | date: "%B %d, %Y" }}</span>
        {% if post.updated %}
          <span>Updated {{ post.updated | date: "%B %d, %Y" }}</span>
        {% endif %}
      </div>
      {% if post.author %}
        {% include author-badge.html author_key=post.author compact=true %}
      {% endif %}
      <p>{{ post.excerpt | strip_html | truncate: 160 }}</p>
    </article>
  {% endfor %}
</div>
