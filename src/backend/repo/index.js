const express= require('express');
const app = express();
require('dotenv').config({ path: 'C:\\Learning\\src\\backend\\repo\\.env' });
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = process.env.DB_URL;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const mongoose= require('mongoose');
const { User } = require('./User.models');
// const {Email} = require('./Email.models');

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
   

   let request=(req.body);
   console.log(request);


   // ---Create and Save the Document ---
const saveUser = async (request) => {
  try {
    // Create a new instance of the User model with your data
    const newUser = new User(JSON.stringify(request));

    // Save the new user to the database
    const savedUser = await newUser.save();

    console.log('User saved successfully:', savedUser);
  } catch (error) {
    console.error('Error saving user:', error);
  } finally {
    // Optionally close the connection after saving
    // mongoose.connection.close();
  }
};

 saveUser();
 res.send(htmlData);
  
})

console.log(uri);


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
    // await client.db("admin").command({ ping: 1 });
     // Send a ping to confirm a successful connection
    await client.db("mydb").command({ ping: 1 });  
   
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
    
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);




// Call the function to save the user data
// We add a small delay or check connection status in a real app,
// but for this example, we'll assume the connection will be up.
mongoose.connection.once('open', () => {
    saveUser(userData);
    console.log(userData);
});
