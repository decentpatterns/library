---
title: QR Code Verification
tags:
  - ui
topic: sharing-permissions
description: "Securely verify or transfer information between two peers."
---

### The Design Problem

Use QR codes to quickly scan and verify that a device or some information is secure. In a typical centralized application, we trust the person or company operating the website to verify content. A particular profile or piece of content is mediated by this central server.

However, decentralized applications often rely upon very long strings of characters and/or numbers to identify people or a piece of information, especially for secure communication or secret groups. These very long URLS can be difficult to share in some cases.

### The Design Solution

In a decentralized world, QR codes no longer have to link to a centralized shared item. Instead, you can embed information directly in the QR code to share with peers. QR codes can also be exported or printed as an image and sent over a third-party service such as WhatsApp.

### Examples

::: examples

- [![QR Codes in Delta.Chat](qr-code-deltachat.png) delta.chat for verified groups](qr-code-deltachat.png)

- [![QR Codes in Signal](qr-code-signal.png) Signal for verified devices](qr-code-signal.png)

- [![QR Codes in SSB](qr-code-ssb.png) Secure Scuttlebutt for invitations](qr-code-ssb.png)

- [![QR Codes in Threema](qr-code-threema.png) Threema makes QR Code prominent as part of the user id](qr-code-threema.png)

::: 

### Why Choose QR Code Verification?

When you want to securely verify or transfer information between two peers.

### Best Practice: How to Implement QR Code Verification

Tell users when the QR code is safe to share publicly or should only be shared with trusted peers.
Allow users to load the QR code as an image in case their camera is broken or unusable.

### Potential Problems with QR Code Verification

- For better or worse, the COVID-19 pandemic has introduced QR codes at a very large scale. Most people understand the basic interaction with a QR code; but it has also taught a rather non-chalant attitude with scanning any QR code one comes across. Beware of bad actors putting QR code stickers for phishing attempts and more - best to protect your QR in some fashion, and always add a visual brand close to it so people know they can trust it.
- Keep in mind that anyone can take a picture of your QR code and use it later.
- Long pass phrases (such as a [mnemonic code](https://en.wikipedia.org/wiki/Mnemonic)) is more complex than showing and scanning a QR code or importing a backup file. However, these long phrases may be useful instead of QR codes in low-bandwidth scenarios where image uploading is costly or time consuming. If used instead of a QR Code, mnemonic phrases should be translated into the user's native language.

### The Take Away

QR Code Verification is a user-friendly approach to transfer and verify information in decentralized systems.

### References & Where to Learn More

https://www.usenix.org/system/files/conference/soups2018/soups2018-vaziripour.pdf
