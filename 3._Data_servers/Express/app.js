const express = require('express')
const app = express()
const port = 6000

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Data authority API',
      version: '0.0.1',
    },
  },
  apis: ['/timestamp'], 
};

/**
 * @openapi
 * /:
 *   get:
 *     summary: returns Hello World
 */
app.get('/', (req, res) => {
  res.send('Hello World!')
})

/**
 * @openapi
 * /timestamp:
 *   get:
 *     summary: Returns the current timestamp
 *     responses:
 *       200:
 *         description: Returns the date
 */
app.get('/timestamp', (req, res) => {
  var date = new Date();
  res.send(date.toISOString())
})

const http = require('http');

function onRequest(request, response) {
    const options = {
        host: 'https://859a-94-18-243-162.eu.ngrok.io',
        port: 8000,
        path: '/time'
    };

    const body = '';

    http.get(options, function(responseFromRemoteApi) {
        responseFromRemoteApi.on('data', function(chunk) {
            // When this event fires we append chunks of 
            // response to a variable
            body += chunk;
        });
        responseFromRemoteApi.on('end', function() {
            // We have the complete response from Server B 
            // Send that as response to client
            response.writeHead(200, { 'Content-type': 'text/html' });
            response.write(body);
            response.end();
        });
    }).on('error', function(e) {
        console.log('Error when calling remote API: ' + e.message);
    });
}

http.createServer(onRequest).listen(process.env.PORT || 3000);
console.log('Listening for requests on port ' + (process.env.PORT || 3000));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


