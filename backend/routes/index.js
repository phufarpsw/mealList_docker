const express = require("express");
const pool = require("../config");
const path = require("path")

const router = express.Router();
router.get("/recipes", async function (req, res, next) {
  try {
    let sql = "SELECT * FROM recipes";
    let cond = [];
    const [rows, fields] = await pool.query(sql, cond);
    return res.json(rows);
  } catch (err) {
    return res.status(500);
  }
});
router.get("/recipes/:recipeId", async function(req, res, next){
  try{
    let sql = "SELECT * FROM recipes WHERE id = ?";
    let [rows, fields] = await pool.query(sql, [req.params.recipeId]);
    return res.json(rows);

  }catch(err){
    return res.status(500).json(err)
  }
})
router.post("/signup", async function (req, res, next) {
  console.log(req.body)
  try {
    const conn = await pool.getConnection();
    await conn.beginTransaction();
    let results = await conn.query(
      "INSERT INTO users (username, password, firstname, lastname, email, tel) VALUES (?,?,?,?,?,?);",
      [req.body.username, req.body.password, req.body.firstname, req.body.lastname, req.body.email, req.body.tel]
    );
    await conn.commit();
    res.json("Account has been added");
  } catch (err) {
    // await conn.rollback();
    next(err);
  }
});
router.post("/signin", async function(req, res, next){
  try{
    const conn = await pool.getConnection();
    await conn.beginTransaction();
    console.log(req.body.username)
    let [rows, fields] = await conn.query(
      "SELECT * from users WHERE username = ? AND password = ?",
      [req.body.username, req.body.password]
    );
    await conn.commit();
    res.json(rows);
  }catch(err){
    await conn.rollback();
    next(err);
  }
})

exports.router = router;
