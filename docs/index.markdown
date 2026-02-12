---
layout: docs
title: Documentation
subtitle: Getting started, setup guides, and day-to-day workflows for treasurers and team admins.
permalink: /docs/
---

<div class="grid two">
  {% for doc in site.docs %}
    <article class="info-card">
      <h3><a href="{{ doc.url | relative_url }}">{{ doc.title }}</a></h3>
      <p>{{ doc.excerpt | strip_html | truncate: 160 }}</p>
    </article>
  {% endfor %}
</div>
