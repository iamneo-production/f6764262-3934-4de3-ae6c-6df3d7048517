const mongoose = require("mongoose");

const accountSchema = new mongoose.Schema({
  accountId: {
    type: String,
  },
  balance: {
    type: String,
  },
  upiId: {
    type: String,
  },
  publicKey: {
    type: String,
  },
});

const Account = mongoose.model("ACCOUNT", accountSchema);

module.exports = Account;
