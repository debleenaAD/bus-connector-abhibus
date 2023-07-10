module.exports = {
    testEnvironment: 'node',
    testMatch: ['<rootDir>/__tests__/**/*.test.ts'],
    transform: {
      '^.+\\.tsx?$': 'ts-jest',
      '^.+\\.jsx?$': 'babel-jest',
    },
  };