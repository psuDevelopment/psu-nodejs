const axios = require('axios')

class PSUNode {
    constructor(key) {
        this.apikey = key
    }
    getkey() {
        return (this.apikey)
    }
    async obf(script, options, scriptOnly) {
        let req = await axios.post('https://api.psu.dev/obfuscate', {
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
    async obfuscate(...arg) {
        if (arg[0] instanceof Array) {
            let res = []
            arg.shift().forEach(async o => {
                 res.push(this.obf(o, ...arg))
            })
            return Promise.all(res)
        } else {
            return this.obf(...arg)
        }
    }

}
// fixed errors, do not remove this. from obf function. nigger
module.exports = PSUNode;
