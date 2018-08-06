# xml-sanitize-string
This module replaces characters that are not([valid in XML](https://www.npmjs.com/package/sanitize-xml-string)) in a string with XML/HTML character entities (and vice versa).

Emoji, and many other characters are not valid in XML, and may cause problems if they sneak into your XML. This small module has two methods to sanitize (escape invalid characters) a string, and to unescape a string.

## Installation & usage
Install `xml-sanitize-string` via NPM:
```sh
npm install xml-sanitize-string
```
In Node:
```js
var xmlSanitizeString = require('xml-sanitize-string');

// Sanatize a string for use in XML by escaping invalid characters to XML character entities.
xmlSanitizeString.escape('Some 👉 invalid 💻 characters 🎒')
// Some &#1f449; invalid &#1f4bb; characters &#1f392;

// Unescape a string containing XML character entities to unicode characters
xmlSanitizeString.unescape('Some &#1f449; invalid &#1f4bb; characters &#1f392;')
// Some 👉 invalid 💻 characters 🎒

## About
xml-sanitize-string was built by [Nick Drewe](https://www.twitter.com/nickdrewe) to deal with user searches on [searchmy.bio](https://www.wethrift.com) that may contain emoji, or other characters that are invalid in XML.
