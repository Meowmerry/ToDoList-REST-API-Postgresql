const { query } = require("express");
const db = require("../models/todolist.model");
const createError = require("../utils/constants");

const todolistController = {};

todolistController.createItemList = async (req, res, next) => {
  try {
    const { id, items, isDone, minutes } = req.body;
    const sqlQuery = `INSERT INTO listTodo
        (id, items, isDone, minutes)
        VALUES($1, $2, $3, $4)
        RETURNING *`;
    await db.query(sqlQuery, [id, items, isDone, minutes]);
    res.locals.status = "Successfully created!";
    return next();
  } catch (error) {
    return next(createError({ message: { err: error.message } }));
  }
};

todolistController.getAllList = async (req, res, next) => {
  try {
    const sqlQuery = `SELECT * From listTodo`
    const data = await db.query(sqlQuery);
    res.locals.list = data.rows;
    return next();
  } catch (error) {
    return next(createError({ message: { err: error.message } }));
  }
};

todolistController.updateListById = async (req, res, next) => {

  try {
    const {id} = req.params
    const {items, isDone, minutes } = req.body;
    if(items || isDone ||minutes ){
    const sqlQuery = `UPDATE listTodo
    SET items = $1, isDone = $2, minutes=$3
    WHERE id =${id}`;
    await db.query(sqlQuery,[items,isDone,minutes]);
    }
    res.locals.status = "Successfully updated!";
    return next();
  } catch (error) {
    return next(createError({ message: { err: error.message } }));
  }
};

todolistController.deleteListById = async (req, res, next) => {
  try {
    const {id} = req.params;
    if(id){
        const sqlQuery = `DELETE FROM listTodo WHERE id =${id}`;
        await db.query(sqlQuery);
        res.locals.status = "Successfully deleted!";
    }else{
        return next(createError({ message: { err: error.message } }));
    }
    return next();
  } catch (error) {
  
  
    return next(createError({ message: { err: error.message } }));
  }
};
module.exports = todolistController;
