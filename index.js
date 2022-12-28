const express = require('express')
const format = require('date-format')
const app = express()

require('dotenv').config()
app.use(express.json())



const PORT = process.env.PORT


app.get('/', (req, res) => {
    res.status(200).send("<h1>Hello World</h1>")
})


app.get('/api/v1/instagram', (req, res) => {
    const instaSocial = {
        username: 'ryan',
        followers: '32',
        posts: '32',
        date: format.asString('MM-dd-yy', new Date())
    }

    res.status(200).json(instaSocial)
})


app.get('/api/v1/linkedin', (req, res) => {
    const linkedinSocial = {
        username: 'rmblake2010',
        followers: '3232',
        posts: '4242',
        date: format.asString('MM-dd-yy', new Date())
    }

    res.status(200).json(linkedinSocial)
})

app.get('/api/v1/:id', (req, res) => {
    console.log(req.params.id)
    res.status(200).json({param: req.params.id})
})


app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`)
})