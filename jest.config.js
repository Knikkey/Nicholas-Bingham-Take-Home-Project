module.exports = {
  testPathIgnorePatterns: [
    "<rootDir>/.next/",
    "<rootDir>/node_modules/",
    "<rootDir>/src/",
  ],
  testEnvironment: "jsdom",
  transform: {
    "^.+.(js|jsx|ts|tsx)$": "<rootDir>/node_modules/babel-jest",
  },
  transformIgnorePatterns: ["/node_modules/", "^.+.module.(css|sass|scss)$"],
  moduleNameMapper: {
    "^.+.module.(css|sass|scss)$": "identity-obj-proxy",
  },
  collectCoverageFrom: ["src/**/*.{js,jsx,ts,tsx}", "!src/**/*.d.ts"],
};
