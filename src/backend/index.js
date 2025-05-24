const express= require('express');
const app = express();
require('dotenv').config({ path: 'C:\\Learning\\src\\backend\\.env' });
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://niskrsingh:Tk9On5XdcUFYTXXM@cluster0.dvdyae8.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT= 3000
app.get('/',(req,res)=>{
    res.send('Hello World')
})
app.get('/home',(req,res)=>{
    res.send('<h1>Welcome to Home Page</h1>')
})
app.post('/api/v1/register',(req,res)=>{
   var username = req.body.FirstName;
   var htmlData = 'Hello:' + username;
   res.send(htmlData);
   console.log(htmlData);
   console.log(req.body)
  
})


app.listen(process.env.PORT,()=>console.log(`SERVER STARTED ON PORT: ${PORT} ..`))




// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
    
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);
