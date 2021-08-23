// const mongoose = require("mongoose");

// const drinkSchema=new mongoose.Schema({
//     strDrink:{type:String},
//     strDrinkThumb:{type:String},
//     idDrink:{type:String}
// });

// const drinksModel = mongoose.model("drinks", drinkSchema);


// module.exports=drinksModel

// ****************************************EXAM PRACTICE**************************

const mongoose=require('mongoose');

const drinksSchema=new mongoose.Schema({
    email:{type:String},
    strDrink:{type:String},
    strDrinkThumb:{type:String}
});

// class Drink{
//     constructor(data){
//         this.strDrink=data.drinks.strDrink,
//         this.strDrinkThumb=data.drinks.strDrinkThumb
//     }
// }

const drinksModel=mongoose.model('drinksss',drinksSchema);


module.exports=drinksModel