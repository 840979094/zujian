const  express = require('express');

const app = express();
console.log('代码执行');
app.get('/admin',(req,res)=>{
   console.log(req.query);
   res.send('ok');
});

app.listen(3000)