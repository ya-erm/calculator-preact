module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  globals: {
    'ts-jest': {
      tsconfig: 'tsconfig.test.json',
    },
  },
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts'],
  moduleNameMapper: {
    '\\.(jpg|png)$': '<rootDir>/.jest/fileMock.js',
    '\\.(svg)$': '<rootDir>/.jest/svgMock.js',
    '\\.(css|sass|scss)$': '<rootDir>/.jest/cssTransform.js',
    '^~/(.*)$': '<rootDir>/src/$1',
  },
  coveragePathIgnorePatterns: ['<rootDir>/.jest/', '<rootDir>/node_modules/', '(.*).d.ts$'],
};
