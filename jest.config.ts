import { Config } from '@jest/types'

const config: Config.InitialOptions = {
  verbose: true,
  preset: 'ts-jest',
  testEnvironment: 'node',
  testTimeout: 1 * 60 * 1000,
  globalSetup: './test/jestGlobalSetup.ts',
  modulePaths: ['<rootDir>/src', '<rootDir>/node_modules'],
  roots: ['.'],
  moduleFileExtensions: ['js', 'json', 'ts'],
  testRegex: '.test.ts$',
  transform: {
    '^.+\\.(t|j)s$': 'ts-jest',
    "node_modules/commercetools-adyen-integration-notification/.+\\.(j|t)sx?$": "ts-jest" // TODO
    //"node_modules/commercetools-adyen-integration-notification/.+\\.(j|t)sx?$": "babel-jest"
  },
  //transformIgnorePatterns: ['<rootDir>\/node_modules\/(?!commercetools-adyen-integration-notification)'],
  "transformIgnorePatterns": [
    "node_modules/(?!commercetools-adyen-integration-notification/.*)"
  ]


}

export default config
