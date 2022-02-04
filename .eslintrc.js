module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true
  },
  globals: {
    describe: true,
    it: true,
    jest: true,
    beforeEach: true,
    afterEach: true,
    expect: true,
    window: true,
    document: true,
    navigator: true,
    beforeAll: true,
    afterAll: true,
    global: true,
    xit: true
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'eslint:recommended',
    'plugin:prettier/recommended',
    'plugin:import/errors',
    'plugin:import/warnings'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: ['react', '@typescript-eslint', 'import'],
  rules: {
    'react/react-in-jsx-scope': 'off',
    'react/function-component-definition': [2, { namedComponents: 'arrow-function' }],
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx', '.ts', '.tsx'] }],

    'import/named': ['off'],
    'import/no-default-export': 'error',
    'import/no-unresolved': 'off',
    'import/prefer-default-export': 'off',
    'import/no-extraneous-dependencies': ['off', { devDependencies: true }],
    'import/namespace': ['off'],
    'import/extensions': ['error', 'always', { ignorePackages: true }]
  },
  settings: {
    react: {
      version: 'detect'
    },
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx']
      }
    }
  }
};
