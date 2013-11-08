# jQuery Cabana Browser utility

This utility adds browser vendor css classes to html element and has static method to check for the browser vendor.

## Dependencies
* jQuery library

## Usage
Include `cabana.browser.js` in your JS (app.js) bundle.
To add css classes to html element call:
```js
$.Cabana.browser.addHTMLClasses();
```
To check the browser, use:
```js
$.Cabana.browser.check(); // returns a string
```

### Compatibility
All modern browsers
