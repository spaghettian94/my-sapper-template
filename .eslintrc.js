const overrides = {}

overrides.svelte = {
  files: ['**/*.svelte'],
  plugins: ['svelte3'],
  processor: 'svelte3/svelte3',
  rules: {
    indent: ['error', 2, {
      ...require('eslint-config-google').rules.indent[2],
      MemberExpression: 1,
    },],
    'object-curly-spacing': ['error', 'always'],
    'require-jsdoc': 0,
    // 以下Svelteファイルと相性が悪いので入れないとエラーになる
    'import/first': 0,
    'import/no-duplicates': 0,
    'import/no-mutable-exports': 0,
  }
};

overrides.js = {
  files: ['**/*.js'],
  extends: ['plugin:prettier/recommended'],
  plugins: ['prettier']
};

overrides.cypress = {
  files: ['cypress/**/*.js'],
  env: {
    'cypress/globals': true
  },
  extends: [...overrides.js.extends, 'plugin:cypress/recommended'],
  plugins: [...overrides.js.plugins, 'cypress']
}

module.exports = {
  root: true,
  parserOptions: {
    ecmaVersion: 2019,
    sourceType: 'module'
  },
  env: {
    es6: true,
    browser: true,
    node: true
  },
  extends: ['eslint:recommended', 'google'],
  plugins: ['import'],
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js']
      }
    }
  },
  overrides: Object.keys(overrides).map((key) => overrides[key]),
  rules: {
    'comma-dangle': 'off',
    'func-names': 'off',
    'max-len': 'off',
    'no-console': 'off',
    'no-debugger': 'off',
    'no-invalid-this': 'off',
    'no-extend-native': 'off',
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
