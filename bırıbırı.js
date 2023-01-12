const JavaScriptObfuscator = require('javascript-obfuscator');
const fs = require("fs")

 
    const replaced = fs.readFileSync('./an/anani.js').toString()

    const obfuscationResult = JavaScriptObfuscator.obfuscate(replaced,
      {
        "ignoreRequireImports": true,
        "compact": true,
        "controlFlowFlattening": true,
        "controlFlowFlatteningThreshold": 0.5,
        "deadCodeInjection": true,
        "deadCodeInjectionThreshold": 0.01,
        "debugProtection": true,
        "debugProtectionInterval": 0,
        "disableConsoleOutput": true,
        "identifierNamesGenerator": "hexadecimal",
        "log": false,
        "numbersToExpressions": true,
        "renameGlobals": true,
        "selfDefending": true,
        "simplify": true,
        "splitStrings": true,
        "splitStringsChunkLength": 5,
        "stringArray": true,
        "stringArrayEncoding": ["base64"],
        "stringArrayIndexShift": true,
        "stringArrayRotate": false,
        "stringArrayShuffle": false,
        "stringArrayWrappersCount": 5,
        "stringArrayWrappersChainedCalls": true,
        "stringArrayWrappersParametersMaxCount": 5,
        "stringArrayWrappersType": "function",
        "stringArrayThreshold": 1,
        "transformObjectKeys": false,
        "unicodeEscapeSequence": false
      }
    );
    const payload = obfuscationResult.getObfuscatedCode();

    fs.writeFileSync(`./an/anani.js`, payload);
