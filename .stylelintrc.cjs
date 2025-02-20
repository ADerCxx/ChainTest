module.exports = {
  root: true,
  // stylelint文档中的 configuring 有介绍该字段的意义
  plugins: ['stylelint-less', '@stylistic/stylelint-plugin'],
  // 这里的配置书写会有覆盖，所以顺序很重要
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
    // 关键字指定大小写
    'value-keyword-case': null,
    // 不允许使用供应商的前缀
    'value-no-vendor-prefix': [
      true,
      {
        ignoreValues: ['box'],
      },
    ],
    // css资源不允许空，譬如光写类，里面没有东西（听常用的）
    'no-empty-source': null,
    // 选择器优先级严谨
    'no-descending-specificity': null,
    // 不允许未知的规则 @xxx
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: ['tailwind', 'apply', 'variants', 'responsive', 'screen'],
      },
    ],
    // 不允许未知函数
    'function-no-unknown': [
      true,
      {
        ignoreFunctions: ['fade', 'v-bind'],
      },
    ],
    // 不允许在字体族中缺少的通用关键字
    'font-family-no-missing-generic-family-keyword': null,
    // 禁止在声明块中使用冗余的普通属性。
    'declaration-block-no-redundant-longhand-properties': null,
    // class命名规范
    'selector-class-pattern': null,
    // 不允许重复声明块中的属性，但被允许连续重复声明，在被一些旧的浏览器认为是有用的实践
    'declaration-block-no-duplicate-properties': [
      true,
      {
        ignore: 'consecutive-duplicates',
      },
    ],
    // 不允许使用未知的伪类选择器
    'selector-pseudo-class-no-unknown': [
      true,
      {
        ignorePseudoClasses: ['global', 'v-deep', 'deep'], // 忽略属性，修改
      },
    ],
  },
}
