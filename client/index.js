const express = require('express')
const fetch = require('node-fetch')
const app = express()
const port = 3000

const http = require('http');
const httpAgent = new http.Agent({ keepAlive: true });


app.get('/', async (req, res) => {

    const response = await fetch('http://localhost:4000/', {
        agent: httpAgent
    });
    const body = await response.text();

    res.send(body);
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})