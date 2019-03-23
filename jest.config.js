module.exports = {
  "moduleFileExtensions": [
    "js",
    "ts",
    "json",
    "vue"
  ],
  "moduleNameMapper": {
    "^@/(.*)$": "<rootDir>/$1"
  },
  "transform": {
    ".*\\.(vue)$": "vue-jest",
    "^.+\\.tsx?$": "ts-jest"
  },
  "testRegex": "(/__tests__/.*|(\\.|/)(test|spec))\\.ts$",
  "snapshotSerializers": [
    "jest-serializer-vue"
  ],
  "coverageDirectory": "<rootDir>/reports/junit",
  "reporters": ['default', 'jest-junit']
}
