const fs = require('fs')

const source = fs.readFileSync('./ionicons_source.txt').toString().split('\n')
const target = []
const keys = {}

for (let i=0, len=source.length; i<len; i++) {
    const s = source[i].split(': ')
    const name = s[0], value = s[1]
    if (!keys[value]) {
        target.push(name + ': ' + value)
        keys[value] = true
    }
}

fs.writeFileSync('./ionicons.txt', target.join('\n'))