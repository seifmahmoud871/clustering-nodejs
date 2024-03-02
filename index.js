import express from 'express'
const app = express()
const port = 3000


app.get('/heavy', (req, res) => {

    let total = 0;
    for (let i = 0; i < 50000000; i++) {
        total++;

    }

    res.send(`the result of the cpu intensive task is ${total}`)
})


app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`);
    console.log(`work pid = ${process.pid}`)

}
)