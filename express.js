import express from 'express';

const app=express();
// app.use(express.urlencoded({extended:true}));
app.use((req,res,next)=>{
console.log("this is middlware-1");
req.name="surya";
res.age="23";
next();
})

app.use((req,res,next)=>{
console.log("this is",req.name,res.age);
next();
})

app.get('/',(req,res)=>{
res.send('hello world');
})
app.listen(3000,()=>{
console.log('server is running on port 3000');
})