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
    "\\.(css|less)$": "<rootDir>/tests/styleMock.js",
    ".(png)$": "<rootDir>/tests/fileMock.js",
    "^@/(.*)$": "<rootDir>/src/$1",
  },
  collectCoverageFrom: [
    "src/**/*.{js,jsx,ts,tsx}",
    "!src/**/*.d.ts",
    "!src/app/StyledComponentsRegistry.tsx",
  ],
};
