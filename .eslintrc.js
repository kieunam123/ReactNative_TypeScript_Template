module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: [
    '@typescript-eslint',
    'react',
    'react-native',
    'import'
  ],
  extends: [
    'airbnb-typescript-prettier',
  ],
  settings: {
    'import/resolver': {
      'typescript': {},
    },
  },
  rules: {
    "import/no-extraneous-dependencies": ["error", {"devDependencies": true}],
    "import/prefer-default-export": "off",
    "react/jsx-props-no-spreading": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/interface-name-prefix": [
      "error",
      {
        "prefixWithI": "always"
      }
    ],
    'no-console': 'off',
    "no-use-before-define": ["error", { "variables": false }],
  },
};
