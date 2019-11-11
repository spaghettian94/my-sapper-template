module.exports = {
  printWidth: 256,
  singleQuote: true,
  arrowParens: 'always',
  overrides: [
    {
      files: ['**/*.svelte'],
      options: {
        parser: 'vue',
        vueIndentScriptAndStyle: true
      }
    }
  ]
};
