module.exports = {
  plugins: {
    autoprefixer: {},
    "postcss-px-to-viewport": {
      viewportWidth: 357,
      viewportHeight: 667,
      unitPrecision: 5, //指定 px 转换喂视窗单位值的小数位数
      selectorBlackList: ['ignore','tab-bar','tab-bar-item'],
      minPixelValue: 1,
      mediaQuery: false,
      exclude: [/TabBar/]

    }
  }
}
