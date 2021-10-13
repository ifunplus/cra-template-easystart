module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    // 'plugin:react/recommended',
    // 'airbnb',
    "alloy", "alloy/react", "plugin:flowtype/recommended"
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  /**
 *  "off" 或 0 - 关闭规则
 *  "warn" 或 1 - 开启规则，使用警告级别的错误：warn (不会导致程序退出),
 *  "error" 或 2 - 开启规则，使用错误级别的错误：error (当被触发的时候，程序会退出)
 */
  rules: {
    "indent": 0,
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
    "no-underscore-dangle": [0],
    "react/jsx-wrap-multilines": 0,
    "no-invalid-this": "off",
    "grouped-accessor-pairs": 2,
    "no-constructor-return": 2,
    "no-dupe-else-if": 2,
    "no-import-assign": 2,
    "no-setter-return": 2,
    "prefer-regex-literals": 1,
    "react/no-did-update-set-state": 1,
    "max-params": ["warn", 3],
    "default-case-last": 0,
    "no-loss-of-precision": 0,
    "no-promise-executor-return": 0,
    "no-unreachable-loop": 0,
    "no-useless-backreference": 0,
    "spaced-comment": 1,
    "max-nested-callbacks": ["warn", 5],
    "no-unused-vars": 1,
    "radix": ["error", "as-needed"],
    "prefer-arrow-callback": 0,

    // Definition for rule not found 
    "react/no-unstable-nested-components": 0,
    "react/jsx-no-undef":0

    // "quotes": 0,
    // "jsx-quotes": 0,
    // "react/forbid-prop-types": 0,
    // "arrow-body-style": [2, "as-needed"],
    // "no-multiple-empty-lines": 0,
    // "dot-notation": 0,
    // 'linebreak-style': ["off", "windows"],
    // "comma-dangle": 0,
    // "semi": 0,
    // "arrow-parens": 0,
    // "quote-props": 0,
    // "react/require-default-props": 1,
    // "curly": 0,
    // "react/self-closing-comp": 0,

  },
};
