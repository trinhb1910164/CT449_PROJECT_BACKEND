const mongoose = require("mongoose"); // Erase if already required

// Declare the Schema of the Mongo model
var orderSchema = new mongoose.Schema(
  {
    orderItems:[
      {
        CartId: {
          type:mongoose.Schema.Types.ObjectId,
          ref:"Cart",
          required: true,
        }
      }
    ],
    totalPrice: {
      type:Number,
      required: true,
    },
    orderStatus: {
      type:String,
      default:"chưa xử lý"

    },
  },
  {
    timestamps: true,
  }
);

//Export the model
module.exports = mongoose.model("Order", orderSchema);
