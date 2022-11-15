const express = require("express");
const router = express.Router();
require("../db/conn");
const Account = require("../model/accountSchema");
const authenticate = require("../middleware/authenticate");

router.get("/", authenticate, async (req, res) => {
  const userAccount = await Account.findOne({
    accountId: req.userID,
  });
  console.log(userAccount);
  if (!userAccount) throw new Error("Account not Found!");
  res.status(200).json(userAccount);
});

module.exports = router;
