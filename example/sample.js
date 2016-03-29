'use strict'
const MTD = require('../lib');
const fs = require('fs')
const sampleFile = './MyFile.txt'

let text = fs.readFileSync(sampleFile, 'utf8');

let metadata = MTD.loadMetaData(text)
console.log('MetaData Read: ')
console.dir(metadata)

metadata = {
  uuid: '46ebea8a-f5ee-11e5-9ce9-5e5517507c66',
  updated: new Date(),
  user: {
    name: 'Jon Doe',
    age: 20,
    image: 'jondoe.jpg'
  }
}

let updatedText = MTD.saveMetaData(text, metadata)
fs.writeFileSync(sampleFile, updatedText, 'utf8');




//   /<!-- *metadata *: *(\w*?) *\s([\s\S]*?)-->/g