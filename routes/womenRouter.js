const express = require('express');
const womenRouter = express.Router();
const Women = require('../model/Women')

//Get All 

womenRouter.get('/', (req, res, next) => {
    Women.find()
    .then(womenProducts => {
        return res.status(200).send(womenProducts)
    })
    .catch(err => {
        res.status(500)
        return next(err)
    })
})

//Post 

womenRouter.post('/', (req, res, next) => {
    const newProduct = new Women(req.body)
    newProduct.save(newProduct)
    .then(newProduct => {
        res.status(201).send(newProduct)
    })
    .catch(err => {
        res.status(500)
        return next(err)
    })

})













module.exports = womenRouter;