module.exports = {
  plugins: {
    "postcss-import": {
      plugins: [require("stylelint")({})],
    },
    "postcss-preset-env": {
      stage: 1,
      features: {
        "custom-properties": false,
        nesting: false,
      },
    },
    "postcss-nested": {},
    "postcss-css-variables": {
      preserve: true,
      preserveAtRulesOrder: true,
    },
    "postcss-color-mod-function": {},
    autoprefixer: {},
    "postcss-reporter": {
      clearReportedMessages: true,
      noIcon: true,
    },
    cssnano: {},
  },
};
