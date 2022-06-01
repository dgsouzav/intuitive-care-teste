const fs = require('fs')

const allFileContents = fs.readFileSync('src/teste.csv', 'utf8')
allFileContents.split(/\r?\n/).forEach(line =>  {
    const lineArray = line.split(';')
    console.log(lineArray)
})

