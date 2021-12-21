 module.exports = {
    testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/'],
    setupFilesAfterEnv:[
      "<rootDir>/src/tests/setupTests.ts"
    ],
    transform:{
      "^.+\\.(js|jsx|ts|tsx)$":"<rootDir>/node_modules/babel-jest"
    },
    testEnvironment:'jsdom',
    moduleNameMapper:{
      "\\.(scss|css|sass|ts)$":"identity-obj-proxy"
    }
  };