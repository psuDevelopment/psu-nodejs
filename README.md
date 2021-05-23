# node-wrapper
NodeJS Wrapper for the PSU Api\
Example Usage:
```js
const api = require('./index.js') // replace with psu-nodejs
const wrapper = new api('APIKey Here')
async function init() {
    var a = await wrapper.obfuscate("print('e')", {
            "DisableSuperOperators": false,
            "MaximumSecurityEnabled": false,
            "EncryptAllStrings": false,
            "DisableAllMacros": false,
            "EnhancedOutput": false,
            "CompressedOutput": false,
            "PremiumFormat": false,
            "ByteCodeMode": "Default"
        }, true // true for script only, remove if not (or set to false)
    )
    console.log(a)
}
init()
```
Made by Agent#9895
