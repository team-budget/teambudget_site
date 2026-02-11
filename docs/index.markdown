---
layout: docs
title: Documentation
subtitle: Getting started, setup guides, and day-to-day workflows for treasurers and team admins.
permalink: /docs/
---

<div class="docs" style="margin-bottom: 24px;">
  <div>
    <h2 style="margin-bottom: 8px;">Getting Started Checklist</h2>
    <p class="muted">
      Create your team, set budgets, add roster expectations, and start tracking transactions with Team Money Status.
    </p>
  </div>
  <a class="button primary" href="#" data-modal-open>Request Demo</a>
</div>

<div class="grid two">
  {% for doc in site.docs %}
    <article class="info-card">
      <h3><a href="{{ doc.url | relative_url }}">{{ doc.title }}</a></h3>
      <p>{{ doc.excerpt | strip_html | truncate: 160 }}</p>
    </article>
  {% endfor %}
</div>
