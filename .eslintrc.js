
const OFF = 'off';
const WARN = 'warn';
const ERROR = 'error';

module.exports = {
  extends: [
    'eslint:all',
  ],
  env: {
    node: true,
  },
  overrides: [
    {
      files: [
        'tests/**/*',
      ],
      rules: {
        'id-length': OFF,
      },
    },
  ],
  parserOptions: {
    ecmaVersion: 12
  },
  rules: {
    'array-bracket-newline': OFF,
    'comma-dangle': [
      ERROR,
      'always-multiline',
    ],
    'function-call-argument-newline': [
      ERROR,
      'consistent',
    ],
    indent: [
      ERROR,
      2,
    ],
    'linebreak-style': [
      ERROR,
      'unix',
    ],
    'max-len': [
      ERROR,
      {
        code: 120,
      },
    ],
    'one-var': [
      ERROR,
      'never',
    ],
    'padded-blocks': [
      ERROR,
      'never',
    ],
    'prefer-template': OFF,
    'quote-props': [
      WARN,
      'as-needed',
    ],
    quotes: [
      ERROR,
      'single',
    ],
    semi: [
      ERROR,
      'always',
    ],
    strict: OFF,
  },
};
