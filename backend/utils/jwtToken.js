const sendToken = (user, statusCOde, res) => {
  const token = user.getJWToken();
  const options = {
    expires: new Date(
      Date.now() + process.env.COOKIE_EXPIRE * 24 * 60 * 60 * 1000
    ),
    httpOnly: true,
  };

  res.status(statusCOde).cookie("token", token, options).json({
    success: true,
    user,
    token,
  });
};
module.exports = sendToken;
