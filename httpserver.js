const http=require('http');
const fs=require('fs');
const server=http.createServer((req,res)=>{
fs.appendFile('./server.txt',`path:${req.url}  time:${new Date().toString()}\n`,(err)=>{
if(err){
throw err;
}
else 
console.log('file created');
});
res.end('hello world');
})
server.listen(3000,()=>{console.log('server started')});