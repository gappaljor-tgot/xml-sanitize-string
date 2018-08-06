const unicodeCharToHexCodePoint = function(char){
  const hex = char.codePointAt(0).toString(16);
  const result = "0000".substring(0, 4 - hex.length) + hex;
  return result
}

const hexCodePointToUnicodeChar = function(hexCodePoint){
  return String.fromCodePoint(parseInt(hexCodePoint, 16))
}

const XMLSafeString = function(str){
  if(str && str.length){
    str = str.replace(/([\uD800-\uDBFF][\uDC00-\uDFFF])/g, function(c){
      return `&#${unicodeCharToHexCodePoint(c)};`
    })
    // replace remaining non-safe characters
    str = str.replace(/[^\u0009\u000a\u000d\u0020-\uD7FF\uE000-\uFFFD]/g,'')
  }
  return str
}

const XMLUnescapeString = function(str){
  if(str && str.length){
    str = str.replace(/&#[\d\w]{1,6};/g, function(m){
      return hexCodePointToUnicodeChar(m.replace('&#','').replace(';',''))
    })
  }
  return str
}

exports.escape = XMLSafeString
exports.unescape = XMLUnescapeString
