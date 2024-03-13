// const os = require('os');
// console.log(os.hostname());
// console.log(os.platform());
// console.log(os.cpus());
// console.log(os.freemem());

const http = require('http');
const fs = require('fs');
const server = http.createServer((req, res) => {

    switch (req.url) {
        case '/': {
            res.setHeader('Content-Type', 'text/plain')
            res.end('Welcome to NodeJS Application');
            break;
        }
        case '/user': {
            res.setHeader('Content-Type', 'application/json')
            res.end(JSON.stringify({ name: 'Dhiraj', email: 'Dhiraj@gmail.com' }));
            break;
        }
        case '/home': {
            res.setHeader('Content-Type', 'text/html')
            res.end('<h1>Welcome to NodeJS Application</h1>');
            break;
        }
        case '/index': {
            res.setHeader('Content-Type', 'text/html')
            fs.readFile('index.html', (err, data) => {
                res.end(data);
            });
        }
    }
    // res.writeHead(200, 'success', {
    //     'Content-Type': 'application/json',
    //     'content-language': 'en-US'
    // })

    // res.end('Welcome to NodeJS Http Server');
})
const port = 9000 | process.env.port;
server.listen(port, () => {
    console.log('Server is running on port 9000');
})