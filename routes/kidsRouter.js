const express = require('express');
const kidsRouter = express.Router();
const Kids = require('../model/Kids')

//Get All 

kidsRouter.get('/', (req, res, next) => {
    Kids.find()
    .then(kidsProducts => {
        return res.status(200).send(kidsProducts)
    })
    .catch(err => {
        res.status(500)
        return next(err)
    })
})

//Post 

kidsRouter.post('/', (req, res, next) => {
    const newProduct = new Kids(req.body)
    newProduct.save(newProduct)
    .then(newProduct => {
        res.status(201).send(newProduct)
    })
    .catch(err => {
        res.status(500)
        return next(err)
    })

})













module.exports = kidsRouter;