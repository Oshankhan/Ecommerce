const ErrorHandler = require("../utils/errorhandler");
const catchAsyncError = require("./catchAsyncError");
const jwt = require("jsonwebtoken");
const User = require("../Models/userModel");

exports.isAuthenticatedUser = catchAsyncError(async (req, res, next) => {
  const { token } = req.cookies;

  if (!token) {
    return next(new ErrorHandler("Please loggin to access this record", 401));
  }
  const decordedData = jwt.decode(token, process.env.JWT_SECRET);
  req.user = await User.findById(decordedData.id);
  next();
});

exports.authorizeRoles = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      console.log("roles");
      return next(
        new ErrorHandler(
          `Role : ${req.user.role} is not allowed to access the resource`,
          403
        )
      );
    }

    next();
  };
};
