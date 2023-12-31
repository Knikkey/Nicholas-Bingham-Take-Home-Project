module.exports = {
  presets: [
    "@babel/preset-env",
    ["@babel/preset-react", { runtime: "automatic" }],
  ],
  plugins: [
    [
      "styled-components",
      {
        ssr: true,
        displayName: true,
        preprocess: false,
      },
    ],
  ],
};
