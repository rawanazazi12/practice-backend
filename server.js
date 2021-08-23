// const express = require('express') // require the express package
// const app = express() // initialize your express app instance

// const cors=require('cors');
// app.use(cors());
// app.use(express.json());
// require ('dotenv').config();
// const PORT=process.env.PORT;

// const mongoose = require("mongoose");
// mongoose.connect("mongodb://127.0.0.1:27017/drink", { useNewUrlParser: true ,useUnifiedTopology: true,useFindAndModify: false });
// // a server endpoint 
// const {getDrinks,addingDrink,gettingFav,deleteFav,updateFav}=require('./controllers/drinksController')
// app.get('/', // our endpoint name
//  function (req, res) { // callback function of what we should do with our request
//   res.send('Hello World') // our endpoint function response
// })

// app.get('/allDrinks',getDrinks);
// app.post('/favDrink',addingDrink);
// app.get('/fav',gettingFav);
// app.delete('/fav/:id',deleteFav);
// app.put('/fav/:id',updateFav);
 
// app.listen(PORT,()=>{
//     console.log(`Listening from ${PORT} `)
// });


// *****************************************8EXAM PRACTICE******************************

const express=require('express');
const app =express();
const cors=require('cors')
app.use(cors());
app.use(express.json());

require('dotenv').config();
const PORT=process.env.PORT;
const MONGO_URL=process.env.MONGO_URL

app.get('/', // our endpoint name
 function (req, res) { // callback function of what we should do with our request
  res.send('Hello World') // our endpoint function response
})
 

const mongoose=require('mongoose');
// mongoose.connect("mongodb://127.0.0.1:27017/practice", { useNewUrlParser: true, useUnifiedTopology: true,useFindAndModify: false  });

mongoose.connect(MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true,useFindAndModify: false  });
const{getData,createFav,getFav,deleteFav,updateFav}=require('./controllers/drinksController')

app.get('/allData',getData);
app.post('/fav',createFav);
app.get('/fav',getFav);
app.delete('/fav/:id',deleteFav);
app.put('/fav/:id',updateFav)

app.listen(PORT,()=>{
  console.log( `listening from ${PORT} `)
}) 
