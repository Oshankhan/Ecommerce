const mongoose = require("mongoose");
const productSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please Enter the name"],
    trim: true,
  },
  description: {
    type: String,
    required: [true, "Please Enter the description"],
  },
  price: {
    type: Number,
    required: [true, "Please Enter the price"],
    maxLength: [8, "Price amount cannot exceed 8 digit"],
  },
  ratings: {
    type: Number,
    default: 0,
  },
  image: [
    {
      public_id: {
        type: String,
        required: true,
      },
      url: {
        type: String,
        required: true,
      },
    },
  ],
  category: {
    type: String,
    required: [true, "Please Enter Product Catagory"],
  },
  Stock: {
    type: Number,
    required: [true, "Please Enter the stock"],
    maxLength: [4, "Stock cannot exceed 4"],
    default: 0,
  },
  reviews: [
    {
      user: {
        type: mongoose.Schema.ObjectId,
        ref: "User",
        require: true,
      },
      name: {
        type: String,
        required: true,
      },
      rating: {
        type: Number,
        required: true,
      },
      comment: {
        type: String,
        required: true,
      },
    },
  ],
  user: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
    required: true,
  },
  createdAt: {
    type: String,
    default: Date.now,
  },
});

module.exports = mongoose.model("Product", productSchema);
