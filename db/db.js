const mongoose = require('mongoose');

uri ='mongodb+srv://rish15:1OXx0uUqVHd93Azh@cluster0-fl6yg.mongodb.net/covid?retryWrites=true&w=majority'
// Mongoose connection
mongoose.connect(uri,{
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
