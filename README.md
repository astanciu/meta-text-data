## Meta-Text-Data

Allows storing metadata inside a plain text document, in YAML format, and retrieve in JavaScript as an Object.

## Problem?
There are many web apps out there that do not allow storing custom fields. Github, for example, won't let you add a custom field to an Issue. Maybe you have a separate tool to organize/track Github issues and you'd like to store references or other data, in Github, for each issue.

Using `meta-text-data`, you can append a small block of text that holds your custom metadata, to any large text field available (body, description, etc...)

The metadata is stored in plain text as:
```
This is my normal text body.

<!-- metadata
uuid: 46ebea8a-f5ee-11e5-9ce9-5e5517507c66
updated: 2016-03-29T20:40:27.997Z
user: {name: 'Jon Doe', age: 20, image: jondoe.jpg}
-->

(can have more text under it, too)
```

*bonus*: Github will treat this as a comment and won't display it in View mode.

## Usage

To load Metadata:
```
var MTD = require('meta-data-text')
var metadata = MTD.loadMetaData(textbody)
```

`metadata` is now a JS Object

To save Metadata:
```
var metadata = {name: 'Jon', id: 123}
var textbody = MTD.saveMetaData(text, metadata)
```

## Storage
The metadata block will be appended to the end of the document if it does not currently exist, or it will be updated in place, where it is in the document
