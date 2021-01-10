const mongoose = require('mongoose')

mongoose.Promise= global.Promise;
mongoose.connect('mongodb://localhost:27017/Login',{useNewUrlParser: true ,useUnifiedTopology: true, useCreateIndex: true}).
then(()=>{
console.log('Connected to Database');
}).
catch((err)=>{
  console.log('Could not connect to Database',err);
});

module.exports={mongoose}
