---
title: Peer Introduction
topic: identity-agency
tags:
  - ui
description: "Users introduce their peers to securely grow their network of trust."
---

### The Design Problem

In distributed networks, users often lack a list of anything, like directories
of the most popular users. So even if an app wanted to breach privacy, it has a
hard time proposing new peers to a user. At the same time, especially the
usefulness of social apps is bound by how well users are connected with others
they are interested in.

### The Design Solution

Enabling users to introduce two or more peers who know or might be interested
in each other but are not yet connected in the app is a great way to help
onboard users, especially in social apps.

In case there is a lot of trust towards the introducer, such an introduction
can reduce the necessity for out-of-band verification like
[[qr code verification]].

### Examples

::: examples

- [![Contact introductions in Coagulate](coagulate-peer-introductions.png) Coagulate allows users to introduce two of their contacts to each other.](coagulate-peer-introductions.png)

:::

### Why Choose Peer Introduction?

Especially with social applications, peer introductions accelerate users
growing their network.

### Best Practice: How to Implement Peer Introduction

- Allow introducers to set an introduction specific name for each of the
  introduced peers or to supply an introductory message. This can help the
  introduced peers determine whether they would like to accept.
- Both introduced peers need to individually have the option to accept or
  reject an introduction attempt.
- Introducers can already suggest which (public) key material the introduced
  peers can use to securely communicate.
- Make sure users understand the level of trust they need to have in the
  introducer. The strictest path is to require out-of-band verification of the
  used key material after the introduction (see [[qr code verification]]). Less
  strict would be to just warn about the potential negative consequences by
  accepting an introduction from an untrusted peer.
- Allow users to block all future introduction attempts from peers they do not
  trust, to avoid users accidentally accepting an introduction by them.
- Apps can lower the threshold for introductions by proposing users which of
  their peers to introduce. This can for example be based on shared interest in
  documents or other existing grouping.
- Combined with [[persistent identity]] helps users to avoid introducing peers
  that already know each other. Peers can for example share a hashed version of
  all the peer IDs they already know about with their peers so they know who
  they do not need to introduce. This can even be done via private set
  intersection to avoid disclosing the identities my peer does not know about.

### Potential Problems with Peer Introduction

- This pattern's effectivity is strongly dependent on the trust level between
  the involved users.
- If the introducer controls the communication channel and suggests the
  cryptographic key material for the initial interaction between the introduced
  peers, e.g. by preparing a record in a distributed storage like a DHT and
  granting the introduced peers access, or by forwarding the communication
  between the two, the introducer can conduct an on-path (MITM) attack.

### The Take Away

If there is strong trust between users or convenient out-of-band verification
available, peer introduction helps users grow their peers' networks of trust.

### References & Where to Learn More

- 
