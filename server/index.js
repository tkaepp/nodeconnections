const express = require('express')
const fetch = require('node-fetch')
const app = express()
const port = 4000


const http = require('http');
const httpAgent = new http.Agent({ keepAlive: true });
const timeout = 1000;

app.get('/', async (req, res) => {

    const response1 = fetch('http://localhost:5000/fast', {
        agent: httpAgent,
        timeout
    });
    
    const response2 = fetch('http://localhost:5000/slow', {
        agent: httpAgent,
        timeout
    });
   
    const response3 = fetch('http://localhost:5000/fast', {
        agent: httpAgent,
        timeout
    });
    
    const response4 = fetch('http://localhost:5000/fast', {
        agent: httpAgent,
        timeout
    });

    const requests = await Promise.all([
        response1,
        response2,
        response3,
        response4
    ]);

    const body1 = await requests[0].text();
    const body2 = await requests[1].text();
    const body3 = await requests[2].text();
    const body4 = await requests[3].text();

    res.send(body1 + body2 + body3 + body4);
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})