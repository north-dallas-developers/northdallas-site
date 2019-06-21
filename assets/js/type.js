const Typography = require('typography')
const CodePlugin = require('typography-plugin-code')
const funstonTheme = require('typography-theme-funston')

funstonTheme.default.plugins = [
    new CodePlugin.default(),
]

const typography = new Typography(funstonTheme.default)
typography.options.baseFontSize = "16px";
typography.options.scaleRatio = 2;
console.log(typography.options)

typography.injectStyles();
