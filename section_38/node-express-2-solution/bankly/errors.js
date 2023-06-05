/** Make error. */

function makeError(message, status) {
  let err = new Error(message);
  err.status = status;
  return err;
}

/** handler for 404 routes. */

function error404(req, res, next) {
  let err = makeError('Not Found', 404);
  // pass the error to the next piece of middleware
  return next(err);
}

/** general error handler */

function handleRouteErrors(error, req, res, next) {
  // for actual JS exceptions, log the exception stack
  // if (error.stack) console.error(error.stack);

  res.status(error.status || 500).json({ error: error.message });
}

module.exports = {
  makeError,
  error404,
  handleRouteErrors
};
