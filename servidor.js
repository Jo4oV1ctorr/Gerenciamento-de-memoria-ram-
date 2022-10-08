const http = require('http');
const host = ('http//:localhost');
const port = 3000;
const stats = require("./pcRam");

http.createServer((req, res) => {
    const url = req.url;

    if (url === '/stats'){
        res.end(JSON.stringify(stats, null, 2));
        
    }else{

        res.end('<h1>servidor ligado com sucesso  <br> <h2> <font color="green">online</font> </h2> </h1>')

    }
          

}).listen(port, () => console.log( ` Servidor em andamento... ${host}:${port}` )); 












