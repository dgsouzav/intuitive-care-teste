const fs = require('fs')
const csv = require('fast-csv')

const stream = fs.createReadStream('teste.js')

const streamCsv = csv()
                    .on('data', (data) => console.log(data))
stream.pipe(streamCsv)