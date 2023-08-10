---
title: Physical Beacon
topic: sync-status
description: "Control the physical location of data."
tags:
  - ui
---

### The Design Problem

In a centralized world, you must trust that your provider is managing
access and resiliency across the world. Hosting giants have made this
relatively easy for the vast majority of cases. However, the choice of provider
(e.g., Cloudflare, Amazon, or Google) can dictate the policies and terms of use
of data, based on where the user lives.

For example, in Fall 2019, a change in export law required that US companies
block users connecting from [certain countries](https://techcrunch.com/2019/07/29/github-ban-sanctioned-countries).
Without warning, some US companies effectively cut off account access for
people connecting from these regions. Companies also give data to authorities
– for example, [Yahoo! collaborated with
China](https://www.theguardian.com/world/2013/sep/08/chinese-activist-yahoo-email-freed)
to incriminate political dissidents in 2005. These acts set a dangerous
precedent, where knowledge can disappear, becoming inaccessible permanently, or
be shared with third parties without warning. This is a power
dynamic that creates information security vulnerabilities and is especially
dangerous for vulnerable populations with sensitive information.

In a decentralized world, users can choose their provider, and where their data
is stored. However, it isn't always clear how or why to make this choice, and
how best to offer this choice to users.

### The Design Solution

A physical beacon is as an 'always-on node' that operates in a particular
jurisdiction. In peer-to-peer and federated contexts, there could be many
physical beacons that are synchronizing and backing up the data on the internet.

It is good for grasping a concrete aspect of the network for those who might
not understand the conceptual aspect of it.

Use this in conjunction with [[Network Health
Indicator]] to show which physical beacons are
currently online. Include concrete information about these locations, such as
their IP address, city, country, provider name (e.g., URL), and latency.

### Examples

::: examples

- [![Physical Beacon in Holo](physical-beacon-holo.png) Holo is a box comparable in size to a home router](physical-beacon-holo.png)

- [![Physical Beacon in Syncthing](physical-beacon-syncthing.png) One of syncthing's primary functions is to add a remote device](physical-beacon-syncthing.png)

::: 

### Why Choose Physical Beacon?

- When users want to control the physical location of their data.

### Best Practice: How to Implement Physical Beacon

- Show users when data has been replicated fully to at least one physical beacon. This helps them know when they are able to shut off their device.
- It should be easy to manage active beacons and transfer data from one beacon to another through a user interface.
- Make an easy "out-of-the-box" setup experience for new physical beacons.
- Hosting fees to beacon operators can help sustain infrastructure when users
  do not want to setup and maintain the beacon themselves.

### Potential Problems with Physical Beacon

Physical Beacon can expose a new attack surface or become a point of failure.
To avoid this, consider using end-to-end encryption and synchronize with beacons
in multiple locations.

### The Take-Away

Physical Beacon can be useful when it's important that data is stored in
a particular physical location (or many physical locations) for improved data
resiliency & archiving capabilities.

### References & Where to Learn More

