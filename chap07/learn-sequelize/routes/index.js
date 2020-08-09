var express = require("express");
var User = require("../models").User;

var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
    User.findAll()
        .then((users) => {
            res.render("sequelize", { users });
        })
        .catch((err) => {
            console.error(err);
            next(err);
        });
});

/* await / async version */
/*
router.get("/", async (req, res, next)=>{
  try{
    const users = await User.findAll();
    res.render('sequelize', {users});
  }catch(error){
    console.error(error);
    next(error);
  }
});
*/
module.exports = router;
