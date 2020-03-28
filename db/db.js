const mongoose = require('mongoose');

const uri = process.env.MONGODB_URL; 
var URL ='mongodb+srv://rish15:1OXx0uUqVHd93Azh@cluster0-fl6yg.mongodb.net/covid?retryWrites=true&w=majority'
// Mongoose connection
const local='mongodb://localhost/covid'
mongoose.connect(URL,{
                  useNewUrlParser: true,
                  useUnifiedTopology: true
                });
const db = mongoose.connection;

// Check for DB connection
db.once('open', function(){
    console.log("Connected to MongoDB successfully!");
});
db.on('error', function(){
    console.log(err);
});
