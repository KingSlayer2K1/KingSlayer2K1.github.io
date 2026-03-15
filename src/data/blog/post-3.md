---
title: "Authentication Flows: Where Real Vulnerabilities Hide"
description: "Practical lessons from analyzing session and credential handling in a live ERP workflow."
pubDate: 2026-03-05
category: "appsec"
draft: false
---

# Most auth bugs are workflow bugs

In security testing, I have seen that authentication issues are often not cryptography problems.
They are usually routing, storage, or session lifecycle problems.

## My flow for auth reviews

- Map login and session creation end-to-end.
- Inspect request and response boundaries in Burp Suite.
- Check for exposed backend paths and weak data handling.
- Propose fixes that teams can apply incrementally.

## Principle I follow

Security findings are useful only when they are reproducible and actionable.

I try to deliver each finding with clear proof and a practical remediation path.
