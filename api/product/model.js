const mongoose = require("mongoose");
const salesSchema = new mongoose.Schema(
    {
        userName:{ type: String, default: null },
        amount:{ type:Number, default:0},
        date:{ type:Date, default:Date.now}
    },
    {
         timestamps: true,
    }
)
var sales = mongoose.model("sales", salesSchema);
module.exports = sales;