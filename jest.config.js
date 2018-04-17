module.exports = {
  setupFiles: [
    "./test-config/test-shim.js",
    "./test-config/test-setup.js"
  ],
  collectCoverage: true,
  collectCoverageFrom: [
    "**/*.{ts,tsx}",
    "!**/node_modules/**",
    "!src/**/*.test.*",
    "!src/**/index.ts"
  ],
  coverageDirectory: "./test-coverage",
  moduleFileExtensions: [
    "ts",
    "tsx",
    "js",
    "jsx"
  ],
  transform: {
    "^.+\\.(ts|tsx)$": "./test-config/preprocessor.js"
  },
  testMatch: [
    "**/__tests__/*.+(ts|tsx|js|jsx)"
  ],
  roots:["src"]
};
