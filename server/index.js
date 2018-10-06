const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const db = require('../db/index.js');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
// app.use(function(req, res, next) {    
//   res.header("Access-Control-Allow-Origin", "*");    
//   res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');   
//   res.header("Access-Control-Allow-Headers", "X-Requested-With,Content-Type,Cache-Control");    
//   return next(); 
//   }
// ); 
app.use(express.static(path.join(__dirname, '../client/public/dist')));

app.get('/getProfile', function (req, res){
  let fakeData = {
    userId: 1111,
    firstName: 'Jim',
    lastName: 'Smith',
    email: 'john.smith@smith.com',
    street: 'Johnsmith dr.',
    city: 'Smithcity',
    userState: 'Bigstate',
    zipCode: '00000' 
  }
  console.log('QUERY:', !req.query.userId == false);
  if (req.query.userId == true) {
    let userId = req.query.userId;
  	db.fetchUserProfile(userId, (err, userProfile) => {
      if (err) {
        res.status(404);
        res.end();
      } else {
        res.status(200);
        res.send(userProfile[0]);
      }
	  });
  } else {
    res.status(200);
    res.send(fakeData);
  }
});

app.post('/postProfile',function(req,res){
  db.insertIntoDB( req, (err, data) => {
    if (err) {
      res.status(500);
      res.end();
    } else {
  	  res.status(201);
      res.end();
    }
  });
});

app.post('/editProfile', function (req, res) {
  db.updateUserProfile(req, (err, data) => {
    if (err) {
      res.status(500);
      res.end();
    } else {
      res.status(201);
      res.end();
    }
  })
});

app.listen(3000,()=>{
  console.log('listening on port 3000');
})





