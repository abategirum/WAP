const http = require('http');
const path = require('path');
const fs = require('fs');

http.createServer((req,res) => {
    const stream = fs.createReadStream(path.join(__dirname,'greet.jpg'));

    stream.on('open', () => {
        stream.pipe(res);
      });   
}).listen(3000,() => { console.log('listening on 3000...') });
