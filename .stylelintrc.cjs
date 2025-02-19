module.exports = {
  root: true,
  plugins: ['stylelint-less', '@stylistic/stylelint-plugin'],
  extends: [
    'stylelint-config-standard-less',
    'stylelint-config-html/vue',
    'stylelint-config-recommended-vue',
    'stylelint-config-recess-order',
    '@stylistic/stylelint-config',
  ],
  overrides: [
    { files: ['**/*.(less|css|vue|html)'], customSyntax: 'postcss-less' },
    { files: ['**/*.(html|vue)'], customSyntax: 'postcss-html' },
  ],
  rules: {
    'value-keyword-case': null,
    'value-no-vendor-prefix': [
      true,
      {
        ignoreValues: ['box'],
      },
    ],
    'no-empty-source': null,
    'no-descending-specificity': null,
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: ['tailwind', 'apply', 'variants', 'responsive', 'screen'],
      },
    ],
    'function-no-unknown': [
      true,
      {
        ignoreFunctions: ['fade', 'v-bind'],
      },
    ],
    'font-family-no-missing-generic-family-keyword': null,
    // 禁止在声明块中使用冗余的普通属性。
    'declaration-block-no-redundant-longhand-properties': null,
    'selector-class-pattern': null,
    'declaration-block-no-duplicate-properties': [
      true,
      {
        ignore: 'consecutive-duplicates',
      },
    ],
    'selector-pseudo-class-no-unknown': [
      // 不允许未知的选择器
      true,
      {
        ignorePseudoClasses: ['global', 'v-deep', 'deep'], // 忽略属性，修改
      },
    ],
  },
}
