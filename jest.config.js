module.exports = {
  preset: '@vue/cli-plugin-unit-jest',
  watchPathIgnorePatterns: ['node_modules'],
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80,
    },
  },
};
