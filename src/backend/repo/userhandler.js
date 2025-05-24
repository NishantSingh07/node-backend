const express= require('express');
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.post('/api/v1/register',(req,res)=>{
   var username = req.body.FirstName;
   var htmlData = 'Hello:' + username;
   res.send(htmlData);
   console.log(htmlData);
   console.log(req.body)
})