const axios = require('axios')

class PSUNode {
    constructor(key) {
        this.apikey = key
    }
    getkey() {
        return (this.apikey)
    }
    async obfuscate(...arg) {
        if (arg[0] instanceof Array) {
            let res = []
            arg.shift().each(async o => {
                 res.push(obf(o, ...arg))
            })
            return Promise.all(res)
        } else {
            return obf(...arg)
        }
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
}

module.exports = PSUNode;
