const axios = require('axios')

class PSUNode {
    constructor(key) {
        this.apikey = key
    }
    getkey() {
        return (this.apikey)
    }
    async obfuscate(script, options, scriptOnly) {
        var req = await axios.post('https://api.psu.dev/obfuscate', {
            "script": script,
            "key": this.apikey,
            "options": options
        })
        if (scriptOnly) {
            return req.data.data
        } else {
            return req.data
        }
    }
}

module.exports = PSUNode;
