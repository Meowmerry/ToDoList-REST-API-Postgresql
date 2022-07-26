const express = require('express');
const router = express.Router();
const todolistController = require('../controllers/todoListContreoller')

router.post('/createList',todolistController.createItemList,(req, res)=>{
    return res.status(200).json("Create Success")
})

router.get('/list',todolistController.getAllList,(req, res)=>{
    return res.status(200).json({})
})

module.exports = router;