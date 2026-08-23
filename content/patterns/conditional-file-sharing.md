---
title: "Conditional File Sharing"
description: "Help users collectively keep data online"
tags:
  - ui
  - topic/moderation-curation
thumbnail: "patterns/conditional-file-sharing/thumbnail.svg"
illustration: "patterns/conditional-file-sharing/illustration.svg"
status: evergreen
---

### The Design Problem

In a centralized world, all content is managed by a single provider. It controls
when and where data is stored.

However, peer-to-peer applications like BitTorrent flip this concept on its
head. There is no single provider who decides when and where data is stored; instead,
anyone with access to the data can choose to re-host it to others at their
discretion. Similarly, in federated applications, it's hard to know when and
how your data is being shared between instances.

### The Design Solution

- Allow users to set **parameters** for what to host. For example, "host until
  next week" or "share only users with property X". This can also be useful when
  trying to improve application or protocol performance if there are many
  users on the network.
- **Create incentives** that encourage hosting less popular content. For example,
  "Users who share datasets with less than 5 peers get a free gold account." See [[Cautious Optimism]] for more details.

> [!example]- Examples
>
> - [![Timed messages in Wire](patterns/conditional-file-sharing/Wire.png) Wire offers timed messages](patterns/conditional-file-sharing/Wire.png)
> - [![Nextcloud retention](patterns/conditional-file-sharing/nextcloud.png) Nextcloud' retention can be filtered by tag](patterns/conditional-file-sharing/nextcloud.png)

### Why Choose Conditional File Sharing?

When there is a large amount of information on the network with varied relevance and popularity.

### Best Practice: How to Implement Conditional File Sharing

- Ensure you can control with whom data is shared and when, including
  individual blocks of data.
- Create smart defaults based on the type of information and group dynamics of
  your application, but allow users to modify this easily using sliders and
  toggles.

### Potential Problems with Conditional File Sharing

- There are maybe still copies of data after the conditions are no longer met.

### The Take Away

Conditional sharing helps users collectively keep data online when it needs to be without a central coordinator.

### References & Where to Learn More

Integrating the data availability layer (p2p redundant hosting) with tracking where data is being shared can provide insight into how data is being used by peers. See [[network health indicator|network health indicators]] for more.
