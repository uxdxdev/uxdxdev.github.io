---
date: '2020-03-04'
title: 'What is Developer UX?'
category: ui,ux,developer,design
banner: './images/banner.jpg'
imageAltText: 'white tiger lying down'
bannerCredit: 'Photo by Smit Patel'
---

> Why is overriding the Object.equals() and Object.hashcode() methods important when using Hashtables, HashSets, and HashMaps in Java?

This is a beautiful iframe:

One thing I think is pretty neat and want to call out specifically is the concept of "local" DevTools. So, there could be things (functions, automations, etc.) that you'd like to have on your own machine, but nobody else wants those things or maybe you're in the middle of working on them. Whatever the case may be, having a script you can have run for you and you alone in your app can be really helpful. So in the App DevTools script we have something like this:

```javascript
// load local dev tools if it's there
// NOTE: this is using some webpack-sepecific features.
// if you're not using webpack, you might consider using
// https://npm.im/preval.macro or https://npm.im/codegen.macro
const requireDevToolsLocal = require.context(
  './',
  false,
  /dev-tools\.local\.js/
)
const local = requireDevToolsLocal.keys()[0]
if (local) {
  requireDevToolsLocal(local).default
}
```
