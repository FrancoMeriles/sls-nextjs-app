module.exports = {
  testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/'],
  setupFilesAfterEnv: ['<rootDir>/test/setupTests.js'],
  moduleNameMapper: {
    '@base(.*)$': '<rootDir>/src/$1',
  },
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': '<rootDir>/node_modules/babel-jest',
    '\\.(css|less|scss|sass)$': '<rootDir>/test/mock/styleMock.js',
  },
}
