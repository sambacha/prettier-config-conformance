'use strict';

module.exports = {
  arrowParens: 'always',
  bracketSpacing: true,
  endOfLine: 'lf',
  jsxBracketSameLine: false,
  jsxSingleQuote: false,
  printWidth: 100,
  proseWrap: 'always',
  quoteProps: 'as-needed',
  semi: true,
  singleQuote: true,
  tabWidth: 2,
  trailingComma: 'all',
  useTabs: false,
  singleAttributePerLine: true,
  vueIndentScriptAndStyle: true,
  overrides: [
    {
      files: ['*.css', '*.scss'],
      parser: [require.resolve('postcss postcss-scss')],
      options: {
        /**
         *  @param printWidth
         *  @summary printWidth is not a line character capture
         *  @see {@link https://prettier.io/docs/en/rationale.html#print-width}
         */
        printWidth: 100,
      }
   ]
};
