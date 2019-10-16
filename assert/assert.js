const assert = require('assert')

assert(5 > 3, 'aaa')

const a = [1,2]
const b = [1,2]
console.log(a === b)
assert.deepEqual(a,b,'!=')
assert.deepStrictEqual(a,b,'!=')  
