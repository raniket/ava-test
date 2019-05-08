const app = require('./app');
const http = require('http');
const server = http.createServer(app);

const PORT = process.env.PORT || 9000;
const HOST = '0.0.0.0';

server.listen(PORT, HOST, () => {
    console.log(`Server is running on port :  ${PORT}`);
});