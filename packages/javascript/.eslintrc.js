module.exports = {
  parserOptions: {
    ecmaVersion: 2017,
    sourceType: 'module',
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
    },
  },
  plugins: [
    'import',
    'unicorn',
  ],
  extends: ['airbnb-base', 'plugin:unicorn/recommended'],
  rules: {
    'strict': 'off',
    'no-var': 'error',
    'no-unused-vars': ['error', { ignoreRestSiblings: false }],
    'semi': ['error', 'never'],
    'no-confusing-arrow': 'off',
    'object-property-newline': 'off',

    'object-curly-newline': 'off',
    'object-curly-spacing': 'error',

    'arrow-parens': ['warn', 'always'],

    'id-match': ['error', '^(([A-Za-z0-9]+){2,})|([A-Z][A-Z_0-9]+)$', {
      properties: false,
      onlyDeclarations: true,
    }],

    'no-magic-numbers': ['error', {
      ignore: [1, 0, -1],
      ignoreArrayIndexes: true,
      enforceConst: true,
      detectObjects: true,
    }],

    'comma-dangle': ['error', {
      arrays: 'always-multiline',
      objects: 'always-multiline',
      imports: 'always-multiline',
      functions: 'ignore',
    }],

    'operator-linebreak': ['error', 'after', {
      overrides: {
        '?': 'before',
        ':': 'before',
        '&&': 'after',
        '+': 'after',
        '||': 'after',
      },
    }],
    'brace-style': ['error', 'stroustrup'],
    'quotes': ['error', 'backtick'],
    'quote-props': ['error', 'as-needed'],
    'no-plusplus': 'off',
    'lines-between-class-members': ['error', 'always', { exceptAfterSingleLine: true }],
    'implicit-arrow-linebreak': ['error', 'beside'],

    'padding-line-between-statements': [
      'error',
      { blankLine: 'always', prev: ['const', 'let', 'var'], next: '*' },
      { blankLine: 'any', prev: ['const', 'let', 'var'], next: ['const', 'let', 'var'] },
    ],

    'no-await-in-loop': 'error',
    'no-restricted-syntax': 'off',

    'import/no-unresolved': 'off',
    'import/extensions': ['error', 'never',
      [
        'json', 'json5',
        'less', 'css', 'scss', 'sass', 'styl',
        'jpeg', 'jpg', 'png', 'svg', 'bmp', 'gif',
      ].reduce((obj, ext) => Object.assign(obj, { [ext]: 'always' }), {}),
    ],

    'import/order': ['warn', {
      groups: [
        ['builtin', 'external'],
        ['internal', 'parent'],
        ['sibling', 'index'],
      ],
      'newlines-between': 'ignore',
    }],

    'import/newline-after-import': ['error', { count: 1 }],
    'import/prefer-default-export': 'warn',
    'import/no-named-as-default': 'error',

    'unicorn/catch-error-name': ['error', { name: 'error' }],
    'unicorn/no-fn-reference-in-iterator': 'off',
    'unicorn/import-index': 'off',
  },
}
