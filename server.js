const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const app = express();

const userRoute = require('./routes/api/users');
const adminRoute= require('./routes/api/admin');
const statementRoute = require('./routes/api/statementRoute');
const User = require('./modals/Users');

//parser
app.use(express.json());
// app.use(cors)

//DB Config
//const db = require('./config/Keys').mongoUri;



//use Routes
app.use('/api/users',userRoute);
app.use('/api/Admin',adminRoute);
 app.use('/api/Statement',statementRoute);

//Server static assests if in production
//if(process.env.NODE_ENV === 'production'){
  //Set static foldr
  app.use(express.static('client/build'));

  app.get('*',(req,res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  })
  
//}

const port = process.env.PORT || 8080;

//Connect to mongodb
mongoose.connect('mongodb+srv://userone:qwertypoiu@cluster0.fjo99.mongodb.net/roidatabase?retryWrites=true&w=majority',
{useNewUrlParser: true, useUnifiedTopology: true,useCreateIndex: true})
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
  console.log('mongoose connected');
});


setInterval(()=>{
  var date = new Date();
  var day = date.getDay();
  var time = date.getHours()
   if(time === 1){
    
          User.updateMany({
            Royalty:{$gt:0,$lt:31}
          },
          {
            $inc:{
              Royaltyamount: parseFloat(1),
              Royalty: -parseFloat(1) ,
              Totalearnings : parseFloat(1),
            }
          }).then(res => {
                console.log(res);
          }).catch(err => {
                console.log(err);
          })
  
   }

},3600000);



  app.listen(port, ()=>{
      console.log(`server running at port ${port}`)
  })