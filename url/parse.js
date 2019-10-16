const url = require('url')

let str = 'http://www.bing.com:80/a/b/1.html?a=12&b=5'

console.log(url.parse(str))