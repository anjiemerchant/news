const toDate = inputStr => `${inputStr.slice(5, 7)}/${inputStr.slice(8, 10)}/${inputStr.slice(0, 4)}`;

const makeError = (status, message) => {
  const err = new Error(message)
  err.status = status;
  return err
};

const isLoggedIn = (req, res, next) => {
  if (!req.user.id) return next(makeError('401', 'Login'))
  next();
};

module.exports = {toDate, makeError, isLoggedIn};
