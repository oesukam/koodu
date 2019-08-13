module.exports = {
  testEnvironment: 'node',
  clearMocks: true,
  coverageDirectory: 'coverage',
  coveragePathIgnorePatterns: [
    'node_modules',
    'lib',
    'jest.config.js',
    'package.json',
    'src/index.js',
  ],
  collectCoverageFrom: ['src/**/*.js'],
  verbose: true,
  coverageThreshold: {
    global: {
      functions: 80,
      lines: 80,
      statements: -10,
    },
  },
  transform: {
    '^.+\\.jsx?$': 'babel-jest',
  },
};
