const db = require("../models/todolist.model");
const createError = require("../utils/constants");

const todolistController = {}

todolistController.createItemList = async(req, res, next)=>{
    try{
        const {id, items,isDone,minutes} = req.body;
        const sqlQuery = `INSERT INTO listTodo
        (id, items, isDone, minutes)
        VALUES($1, $2, $3, $4);`;
        await db.query(sqlQuery,[id, items, isDone, minutes])
        return next()
    }catch (error) {
        return next(createError({ message: { err: error.message } }));
      }

}
todolistController.getAllList = async(req, res, next) =>{

}

todolistController.updateListById = async(req, res, next) =>{

}

todolistController.deleteListById = async(req, res, next) =>{

}
module.exports = todolistController;