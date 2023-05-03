const mongoose = require("mongoose"); // Erase if already required

// Declare the Schema of the Mongo model
var cartSchema = new mongoose.Schema(
  {
    // userId: {
    //   type: mongoose.Schema.Types.ObjectId,
    //   ref: "User",
    // },
    email:{
      type: String,
      require:true,
    },
    image:{
      type: String,
      require:true,
    },
    title:{
      type: String,
      require:true,
    },
    quantity:{
      type: Number,
      // require:true,
    },
    price:{
      type: Number,
      require:true,
    }
  },
  {
    timestamps: true,
  }
);

//Export the model
module.exports = mongoose.model("Cart", cartSchema);
