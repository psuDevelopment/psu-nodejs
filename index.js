const axios = require('axios')

class PSUNode {
  constructor(key) {
    console.log("Initialized.")
    this.apikey = key
  }
  getkey() {
  return(this.apikey)
  }
  async obfuscate(script,options) {
    var req = await axios.post('',{
  "script": script,
  "key": this.apikey,
  "options": options
})
    return req.data
  }
}

module.exports = PSUNode;
