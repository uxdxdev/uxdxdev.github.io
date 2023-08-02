---
date: '2021-03-01'
title: 'Understanding internal, external, and inline CSS'
banner: './images/banner.jpeg'
imageAltText: 'white tiger lying down'
bannerCredit: 'Photo by Maik Jonietz'
bannerLink: 'https://unsplash.com/photos/_yMciiStJyY'
# see src/pages/index.js for default keywords
keywords: css,stylesheets,internal,external,inline
excerpt: There are three main techniques to load Cascading Style Sheets (CSS) in your HTML pages; internal, external, and inline. Performance and maintainability, among other factors, can be impacted by your approach so choose wisely.
---

> There are three main techniques to load Cascading Style Sheets (CSS) in your HTML pages; internal, external, and inline. Performance and maintainability, among other factors, can be impacted by your approach so choose wisely.

The three main ways to load CSS in your HTML pages are:

- Inline CSS - by using the `style` attribute inside HTML elements
- Internal CSS - by using a `<style>` element in the `<head>` section
- External CSS - by using a `<link>` element to link to an external CSS file

## Inline CSS

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Understanding CSS</title>
    <meta charset="UTF-8" />
  </head>

  <body>
    <h1 style="color: purple;">Title</h1>
    <p style="color: limegreen;">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo sequi esse
      odit. Laborum, illum voluptate asperiores aperiam veniam, iusto ullam
      beatae impedit aspernatur harum eum? Sint at eos ipsum tempore.
    </p>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo sequi esse
      odit. Laborum, illum voluptate asperiores aperiam veniam, iusto ullam
      beatae impedit aspernatur harum eum? Sint at eos ipsum tempore.
    </p>
  </body>
</html>
```
*index.html*

Inline CSS uses the `style` attribute and is only applied to a single HTML element. It takes precedence over internal and external CSS. In this example the `<h1>` and first `<p>` element have a `color` style applied inline. The second `<p>` element is unaffected.

Inline CSS increases the size of HTML pages. This means it will take longer for the browser to download which may impact the user experience. Inline CSS styles are not reusable, cannot be shared across pages, and cannot be cached by the browser. It also mixes content with presentation which can impact maintainability. However, using inline CSS avoids the extra network requests that are required for loading external CSS stylesheets.

## Internal CSS

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Understanding CSS</title>
    <meta charset="UTF-8" />
    <style>
      h1 {
        color: purple;
      }
      p {
        color: limegreen;
      }
    </style>
  </head>

  <body>
    <h1>Title</h1>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo sequi esse
      odit. Laborum, illum voluptate asperiores aperiam veniam, iusto ullam
      beatae impedit aspernatur harum eum? Sint at eos ipsum tempore.
    </p>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo sequi esse
      odit. Laborum, illum voluptate asperiores aperiam veniam, iusto ullam
      beatae impedit aspernatur harum eum? Sint at eos ipsum tempore.
    </p>
  </body>
</html>
```
*index.html*

Internal CSS uses a `<style>` element in the `<head>` section and defines the styles for a single HTML page. Inline and external CSS will overwrite internal CSS styling. In this example all `<h1>` and `<p>` elements on the page will have a `color` style applied.

Internal CSS increases the size of HTML pages. This means it will take longer for the browser to download which may impact the user experience. Internal CSS styles are reusable on the same page, but cannot be shared across pages, and cannot be cached by the browser. Content is separated from presentation making maintainability a little easier compared to inline CSS. Using internal CSS avoids the extra network requests that are required for loading external CSS stylesheets, similar to inline CSS.

## External CSS

```css
h1 {
  color: purple;
}
p {
  color: limegreen;
}
```
*/css/styles.css*

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Understanding CSS</title>
    <meta charset="UTF-8" />
    <link rel="stylesheet" href="/css/styles.css" />
  </head>

  <body>
    <h1>Title</h1>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo sequi esse
      odit. Laborum, illum voluptate asperiores aperiam veniam, iusto ullam
      beatae impedit aspernatur harum eum? Sint at eos ipsum tempore.
    </p>
  </body>
</html>
```
*index.html*

External CSS uses a `<link>` element in the `<head>` section to link to an external CSS file. This file is fetched by the browser over the network, processed, and the styles within are applied to the HTML page elements. External CSS files can be local to an `index.html` file or located on a remote server. External CSS takes precedence over internal CSS, but not inline CSS. In this example all `<h1>` and `<p>` elements on the page will have a `color` style applied.

External CSS is reusable and can be shared across multiple HTML pages. These external CSS files can be cached by the browser which can improve performance and the users experience when multiple HTML pages are involved. Extra network requests are required to fetch these external CSS files on first page load. Content is separated from presentation making maintainability easier compared to inline and internal CSS.

## Precedence

Inline CSS > External CSS > Internal CSS

Inline CSS takes precedence over both external and internal CSS. External CSS will overwrite internal CSS.


## Conclusion

Each approach to loading CSS in your HTML pages has it's pros and cons, and there are trade offs depending on your use cases. Common advise that I've read online, and from my own experiences; 

- Avoid using inline CSS for production applications or when working in a team. Only use for prototyping.
- Use only a small amount of internal CSS if absolutely necessary or in combination with asynchronous external CSS file loading.
- Prefer external CSS over inline and internal CSS, the benefits and maintainability outweigh the performance costs.

I want to expand a little on the second point above because I think it's a nice little trick to get the benefits of both internal and external CSS. External CSS files are fetched synchronously by default which blocks the main browser thread from doing other important tasks, like rendering. To get around this issue we can load our non-critical external CSS asynchronously and provide our critical CSS internally.

```html
<head>
  <link rel="stylesheet" href="/path/to/my.css" media="print" onload="this.media='all'">

  <style>
    h1 {
      color: purple;
    }
    p {
      color: limegreen;
    }
  </style>
</head>
```

Using the `media="print"` and `onload="this.media='all'"` attributes in our `<link>` element tells the browser to load this stylesheet asynchronously. This means that we can provide some initial internal CSS to be used when the page is loaded and let our non-critical CSS load in the background. This allows the browser to complete it's other important tasks and speeds up page loads!.

## References

- [www.w3schools.com CSS](https://www.w3schools.com/html/html_css.asp)
- [The Simplest Way to Load CSS Asynchronously](https://www.filamentgroup.com/lab/load-css-simpler/)
- [Comparison of loading CSS inline, embedded and from external files](https://stackoverflow.com/questions/2455488/comparison-of-loading-css-inline-embedded-and-from-external-files)