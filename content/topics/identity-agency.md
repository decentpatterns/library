---
title: "Identity & Agency"
description: "Patterns for managing online identity and credentials when user accounts may not exist or get verified in a variety of ways."
tags:
  - topic
---

In a centralized application, the concept of "who am I" is coordinated by a single authoritative database. In decentralized applications, by contrast, user "accounts" may not exist, or they might get verified in a variety of ways. The patterns in this category help bring clarity to users dealing with questions of how to best manage their own online identity and credentials as well as those of other people.

## Patterns

- [[Address]] — Users are uniquely identified by their handle and a server name.
- [[Disposable Identity]] — Privacy-preserving, short-lived accounts for trusted connections.
- [[Host Roulette]] — Encourage an equal distribution of users per server.
- [[Persistent Identity]] — Securely move between providers and aliases.
