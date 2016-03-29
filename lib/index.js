var YAML = require('yamljs');

function MetaTextData(){
  this.regex = /<!-- *metadata *\s([\s\S]*?)-->/g
}
MetaTextData.prototype.loadMetaData = function loadFromText(text){
  var regex = new RegExp(this.regex)
  var match = regex.exec(text)
  if (match && match.length === 2){
    var metadata = YAML.parse(match[1])
  } else {
    var metadata = {}
  }
  return metadata
}

MetaTextData.prototype.saveMetaData = function saveMetaData(text, metadata){
  var regex = new RegExp(this.regex)
  var match = regex.exec(text)
  var newText 
  if (match && match.length === 2){
    newText = text.replace(match[1], YAML.stringify(metadata, 1, 2))
  } else {
    newText = text + '\n\n' + '<!-- metadata' + '\n'
    newText += YAML.stringify(metadata, 1, 2)
    newText += '-->\n'
  }
  return newText
}

module.exports = new MetaTextData()