---
title: "Visual Hash"
description: "Quickly differentiate between two users or pieces of content."
tags:
  - ui
  - topic/sharing-permissions
thumbnail: "patterns/visual-hash/thumbnail.svg"
illustration: "patterns/visual-hash/illustration.svg"
status: mature
aliases:
  - "library/visual-hash"
---

### The Design Problem

Differentiating between users on a social network scales in difficulty with the
amount of information. To quickly discern the difference between one person and
another; or one piece of content from another, we use icons or pictures. Often
this can be solved by choosing or uploading a photo as a profile picture, or
using a thumbnail version of the content.

However, when neither of these are available, it's difficult to tell content or
users a part quickly.

### The Design Solution

Generate an image based upon the hash of the content or the ID of
the user.

This solution is sometimes called an [identicon](https://en.wikipedia.org/wiki/Identicon).

> [!example]- Examples
>
> - [![Visual hash in Cabal](patterns/visual-hash/visual-hash-cabal.png) Cabal's visual hash format](patterns/visual-hash/visual-hash-cabal.png)
> - [![Visual hash in GitHub](patterns/visual-hash/visual-hash-github.png) Github uses colors as well as patterns](patterns/visual-hash/visual-hash-github.png)
> - [![Visual hash in Radicle](patterns/visual-hash/visual-hash-radicle.png) Radicle's visual hashes don't look like QR codes](patterns/visual-hash/visual-hash-radicle.png)

### Why Choose Visual Hash?

When you need a default image to quickly differentiate between two users or pieces
of content.

### Best Practice: How to Implement Visual Hash

This image should have high enough entropy to cover the elements that would be
visible in a typical user's social network (e.g., 1000 items).

### Potential Problems with Visual Hash

- It often isn't a great proxy for the actual user or the content. Use visual
  nudges to remind the user to choose an image.
- Color blindness could be an issue in differentiating two visual hashes from
  each other. Ensure that the visual hash uses two colors that can be seen by all users.

### The Take Away

Visual hash is a good default image picker that helps you differentiate between users or content.
