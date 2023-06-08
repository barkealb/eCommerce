const express = require('express');
const menRouter = express.Router();
const Men = require('../model/Men')


//Get All 

menRouter.get('/', (req, res, next) => {
    Men.find()
    .then(menProducts => {
        return res.status(200).send(menProducts)
    })
    .catch(err => {
        res.status(500)
        return next(err)
    })
})


// GET One

menRouter.get('/:menId', (req, res, next) => {
    Men.findOne({_id: req.params.menId})
    .then(menProduct => {
        return res.status(200).send(menProduct)
    })
    .catch(err => {
        res.status(500)
        return next(err)
    })
})

//Get One

// menRouter.get('/:menId', (req, res, next) => {
// Men.findOne({_id: req.params.menId}, (err, foundMen) => {
//     if(err){
//         res.status(500)
//         return next(err)
//     }
//     return res.status(200).send(foundMen)
// })
// })

//Post 

menRouter.post('/', (req, res, next) => {
    const newProduct = new Men(req.body)
    newProduct.save(newProduct)
    .then(newProduct => {
        res.status(201).send(newProduct)
    })
    .catch(err => {
        res.status(500)
        return next(err)
    })

})













module.exports = menRouter;