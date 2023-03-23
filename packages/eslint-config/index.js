const {defineConfig} = require('eslint-define-config')

module.exports = defineConfig({
    env:{
        "browser":true,
        "es2021":true,
        "node":true
    },
    extends:"eslint:recommended",
    parserOptions:{
        ecmaVersion:'latest',
        sourceType:'module'
    },
    rules:{
        "no-console": "error"
    }
}) 