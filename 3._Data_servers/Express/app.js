const express = require('express')
const app = express()
const port = 8000

app.get('/', (req, res) => {
  res.send('Hello World! kech')
})

app.get('/timestamp', (req, res) => {
  var date = new Date();
  res.send(date.toISOString())
})

const http = require('http');

function onRequest(request, response) {
    const options = {
        host: 'https://8794-185-96-183-195.eu.ngrok.io',
        port: 8000,
        path: '/timestamp'
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


