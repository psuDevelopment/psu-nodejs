const PSU = require('./index.js') // replace with psu-nodejs
const wrapper = new PSU('APIKey Here');
(async () => {
  let a = await wrapper.obfuscate("print('e')", {
            "DisableSuperOperators": false,
            "MaximumSecurityEnabled": false,
            "EncryptAllStrings": false,
            "DisableAllMacros": false,
            "EnhancedOutput": false,
            "CompressedOutput": false,
            "PremiumFormat": false,
            "ByteCodeMode": "Default"
        }, true // true for script return only, remove if you want the json object (or set to false)
    ) console.log(a)
  }
  console.log(a)
  
  let b = await wrapper.obfuscate(["print('e')","print('xd')", "print(game.Players.LocalPlayer.name)"], {
            "DisableSuperOperators": false,
            "MaximumSecurityEnabled": false,
            "EncryptAllStrings": false,
            "DisableAllMacros": false,
            "EnhancedOutput": false,
            "CompressedOutput": false,
            "PremiumFormat": false,
            "ByteCodeMode": "Default"
        }, true // true for script return only, remove if you want the json object (or set to false)
    )
    // returns an array of promises
    console.log(...b)
  }
})()
