const { query } = require("express");
const db = require("../models/todolist.model");
const createError = require("../utils/constants");

const todolistController = {};

todolistController.createItemList = async (req, res, next) => {
  try {
    const { id, items, isDone, minutes } = req.body;
    const sqlQuery = `INSERT INTO listTodo
        (id, items, isDone, minutes)
        VALUES($1, $2, $3, $4);`;
    await db.query(sqlQuery, [id, items, isDone, minutes]);
    res.locals.status = "Successfully created!";
    return next();
  } catch (error) {
    return next(createError({ message: { err: error.message } }));
  }
};

todolistController.getAllList = async (req, res, next) => {
  try {
    const sqlQuery = "SELECT * From listTodo"
    const data = await db.query(sqlQuery);
    res.locals.list = data.rows;
    return next();
  } catch (error) {
    return next(createError({ message: { err: error.message } }));
  }
};

todolistController.updateListById = async (req, res, next) => {
  try {

    res.locals.status = "Successfully updated!";
    return next();
  } catch (error) {
    return next(createError({ message: { err: error.message } }));
  }
};

todolistController.deleteListById = async (req, res, next) => {
  try {
  } catch (error) {
    return next(createError({ message: { err: error.message } }));
  }
};
module.exports = todolistController;
