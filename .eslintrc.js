module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:@typescript-eslint/recommended",
        "@feature-sliced"
    ],
    "overrides": [
    ],
    "parser": "@typescript-eslint/parser",
    "settings": {
        "import/resolver": {
            "typescript": {
                "alwaysTryTypes": true
            }
        }
    },
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "@typescript-eslint",
        "import"
    ],
    "rules": {
    }
}
