
const fs = require('fs')

 function getProfile(req, res) {
  const readableStream = fs.createReadStream('./profile.html')
  readableStream.pipe(res)
}

module.exports = getProfile;
