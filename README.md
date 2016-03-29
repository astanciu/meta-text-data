## Meta-Text-Data

Allows storing metadata inside a plain text document, in YAML format. 

Ex: GitHub does not allow custom fields on issues, with this, you can store any custom objects inside an issue's body.

The metadata is stored in plain text as:
```
<!-- metadata
uuid: 46ebea8a-f5ee-11e5-9ce9-5e5517507c66
updated: 2016-03-29T20:40:27.997Z
user: {name: 'Jon Doe', age: 20, image: jondoe.jpg}
-->
```

This makes it invisible when viewing a GitHub issue.

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
