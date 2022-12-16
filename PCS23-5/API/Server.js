const http = require('http');
const port = process.env.PORT || 3001;
const app = require('./App');
const server =http.createServer(app);


    


server.listen(port,()=>(console.log('app is running :'+port)));