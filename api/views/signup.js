
const fs = require('fs')

 function getSignup(req, res) {
  const readableStream = fs.createReadStream('./signup.html')
  readableStream.pipe(res)
}

module.exports = getSignup;
