const mongoose = require("mongoose");

const communitySchema = new mongoose.Schema({
    communityId: {
        type: String,
    },
    communityName: {
        type: String,
    },
    communityMembers: {
        type: String,
    },
    communityDob: {
        type: String,
    },
    poolCap: {
        type: String,
    },
    poolVal: {
        type: String,
    },
    status: {
        type: String,
    }
})

const Community = mongoose.model("COMMUNITY", communitySchema);

module.exports = Community;