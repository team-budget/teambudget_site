---
layout: article
title: Articles
subtitle: Longer-form guides and practical breakdowns for transparent hockey team finances.
permalink: /articles/
---

<div class="section-heading">
  <h2>What you will find here</h2>
  <p class="muted">
    Detailed guides on team money status, roster payments, invite workflows, feedback handling, and safe demo cloning.
  </p>
</div>

<div class="grid two">
  {% for article in site.articles %}
    <article class="info-card">
      <h3><a href="{{ article.url | relative_url }}">{{ article.title }}</a></h3>
      {% assign created_at = article.created | default: article.date %}
      <div class="content-meta">
        {% if created_at %}
          <span>Created {{ created_at | date: "%B %d, %Y" }}</span>
        {% endif %}
        {% if article.updated %}
          <span>Updated {{ article.updated | date: "%B %d, %Y" }}</span>
        {% endif %}
      </div>
      {% if article.author %}
        {% include author-badge.html author_key=article.author compact=true %}
      {% endif %}
      <p>{{ article.excerpt | strip_html | truncate: 160 }}</p>
    </article>
  {% endfor %}
</div>
