module.exports = {
    preset: "@vue/cli-plugin-unit-jest",
    "collectCoverage": true,
    globals: {
        'vue-jest': {
          compilerOptions: {
            isCustomElement: (tag) => tag.startsWith("b-"),
          },
        },
      },
};
