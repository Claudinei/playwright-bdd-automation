module.exports = {
  default: {
    paths: ["features/**/*.feature"],
    requireModule: ["tsx/cjs"],
    require: [
      "features/step-definitions/**/*.ts",
      "src/support/**/*.ts"
    ],
    format: ["progress"],
  }
};
