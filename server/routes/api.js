const express = require('express');
const router = express.Router();
const todolistController = require('../controllers/todoListContreoller')

router.post('/createList',todolistController.createItemList,(req, res)=>{
    return res.status(200).json(res.locals.status)
});

router.get('/lists',todolistController.getAllList ,(req, res)=>{
    return res.status(200).json({list: res.locals.list})
});

router.patch('/list/:id',todolistController.updateListById ,(req, res)=>{
    return res.status(200).json(res.locals.status)
})

router.delete('/list/:id',todolistController.deleteListById ,(req, res)=>{
    return res.status(200).json(res.locals.status)
})



module.exports = router;