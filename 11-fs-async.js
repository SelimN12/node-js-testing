const { readFile, writeFile } = require('fs')
const { start } = require('repl')

console.log('start')

readFile('./content/text.txt', 'utf8', (err, result) => {
    if (err) {
        console.log(err)
        return
    }
    const first = result
    readFile('./content/text2.txt', 'utf8', (err, result) => {
        if (err) {
            console.log(err)
            return
        }
        const second = result
        writeFile('./content/result-async.txt',
            `Here is the result: ${first}, ${second}`
        , (err, result) => {
            if (err) {
                console.log(err)
                return
            }
            console.log('done with this task')
        })
    })
})
console.log('starting next task')