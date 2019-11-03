module.exports = {
  root: true,
  parserOptions: {
    ecmaVersion: 2019,
    sourceType: 'module'
  },
  env: {
    es6: true,
    browser: true,
    node: true,
    'cypress/globals': true
  },
  extends: ['eslint:recommended', 'google', 'plugin:cypress/recommended', 'plugin:prettier/recommended'],
  plugins: ['svelte3', 'import', 'cypress', 'prettier'],
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js']
      }
    }
  },
  overrides: [
    {
      files: ['src/**/*.svelte'],
      processor: 'svelte3/svelte3',
      rules: {
        'import/first': 0,
        'import/no-duplicates': 0,
        'import/no-mutable-exports': 0
      }
    }
  ],
  rules: {
    'comma-dangle': 'off',
    'func-names': 'off',
    'max-len': 'off',
    'no-console': 'off',
    'no-debugger': 'off',
    'no-invalid-this': 'off',
    'no-extend-native': 'off',
    'prettier/prettier': 1,
    'import/order': 'error',
    'import/extensions': [
      'error',
      'never',
      {
        json: 'always'
      }
    ]
  }
};
