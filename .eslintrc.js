module.exports = {
    "env": {
        "commonjs": true,
        "es2021": true,
        "node": true
    },
    "extends": "eslint:recommended",
    "overrides": [
    ],
    "parserOptions": {
        "ecmaVersion": "latest"
    },
    "ignorePatterns":[
        "node_modules/*",
        "dist/*",
        "src/public/*",
        "src/views/*",
        "src/services/**/tests/*",
    ],  
    "rules": {
    }
}
