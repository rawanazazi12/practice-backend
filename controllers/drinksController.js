'use strict';
// const drinksModel = require('../models/drinksModel');
// const axios = require('axios');


// const getDrinks = async (req, res) => {
//     axios.get('https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic').then(response => {
//         res.send(response.data.drinks);
//     }).catch(error => console.log(error.message));


// }
// const addingDrink = async (req, res) => {
//     const {
//         strDrink,
//         strDrinkThumb,
//         idDrink
//     } = req.body;
//     console.log(req.body);

//     drinksModel.find({ strDrink: strDrink }, (error, data) => {
//     if (data.length>0){
//         console.log('Item is exsist');
//         res.send(data);

//     }else{
//         const newDrink=new drinksModel({strDrink,
//             strDrinkThumb,
//             idDrink});
//             newDrink.save();
//             res.send(newDrink);
//     }
//     });
// }

// const gettingFav=async(req,res)=>{
//     drinksModel.find({},(error,data)=>{
//         if(error){
//             res.send(error.message);
//         }else{
//             res.send(data);
//         }
//     })
// }

// const deleteFav=async(req,res)=>{
//     const id=req.params.id
//     drinksModel.deleteOne({_id:id},(error,data)=>{
//         if(error){
//             res.send(error.message)
//         }else{
//             res.send(data)
//         }
//     });
// }

// const updateFav=async(req,res)=>{
//     const id=req.params.id;
//     const{
//         strDrink,
//         strDrinkThumb,
//         idDrink
//     }=req.body;
//     drinksModel.findByIdAndUpdate({_id:id},{
//         strDrink,
//         strDrinkThumb,
//         idDrink
//     },{new:true},(error,data)=>{
//         if(error){
//             res.send(error.message);
//         }else{
//             res.send(data)
//         }
//     });
// }


// module.exports = { getDrinks,addingDrink,gettingFav,deleteFav,updateFav }


// ************************************************EXAM PRACTICE*******************************

const drinksModel =require('../models/drinksModel')
// const {Drink}=require('../models/drinksModel')

const axios=require('axios');

const getData=async(req,res)=>{
    axios.get('https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic').then(axiosRes=>{
        res.send(axiosRes.data.drinks)
    }).catch(error=>console.log(error.message))
}

const createFav=async(req,res)=>{
const {
    email,
    strDrink,
    strDrinkThumb
}=req.body;

drinksModel.find({email:email},(error,data)=>{
    if(error){
        res.send(error.message)
    }else{
       
            const newDrink=new drinksModel({
                email,
                strDrink,
                strDrinkThumb
            });
            newDrink.save();
            res.send(newDrink)

        }
    });

}

const getFav=async(req,res)=>{
    drinksModel.find({},(error,data)=>{
        if(error){
            res.send(error.message)
        }else{
            res.send(data);
        }
    })
}

const deleteFav=async(req,res)=>{
    const id=req.params.id;
    drinksModel.deleteOne({_id:id},(error,data)=>{
        if(error){
            res.send(error.message)
        }else{
            res.send(data)
        }
    })
}

const updateFav=async(req,res)=>{
    const id=req.params.id;
    const {
        email,
        strDrink,
        strDrinkThumb
    }=req.body

    drinksModel.findByIdAndUpdate({_id:id},{
        email,
        strDrink,
        strDrinkThumb
    },{new:true},(error,data)=>{
        if(error){
            res.send(error.message)
        }else{
            res.send(data)
        }
    });
}
module.exports={getData,createFav,getFav,deleteFav,updateFav}