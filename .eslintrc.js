/**
 * @type {import('eslint').Linter.Config}
 */
module.exports = {
  root: true,
  ignorePatterns: [],
  overrides: [
    {
      files: '*.js',
      parserOptions: {
        ecmaVersion: 2021
      }
    },
    {
      files: ['*.ts'],
      parserOptions: {
        project: ['tsconfig.json'],
        createDefaultProgram: true
      },
      plugins: ['import'],
      extends: [
        'plugin:@angular-eslint/recommended',
        'plugin:@angular-eslint/template/process-inline-templates',
        'plugin:import/errors',
        'plugin:import/warnings',
        'plugin:import/typescript'
      ],
      settings: {
        'import/parsers': {
          '@typescript-eslint/parser': ['.ts', '.js']
        },
        'import/resolver': {
          typescript: {
            alwaysTryTypes: true
          }
        }
      },
      rules: {
        '@angular-eslint/component-class-suffix': [
          'error',
          {
            suffixes: ['Page', 'Component', 'Dialog']
          }
        ],
        '@angular-eslint/component-selector': [
          'error',
          {
            type: 'element',
            prefix: 'app',
            style: 'kebab-case'
          }
        ],
        '@angular-eslint/directive-class-suffix': 'error',
        '@angular-eslint/directive-selector': [
          'error',
          {
            type: 'attribute',
            prefix: 'app',
            style: 'camelCase'
          }
        ],
        '@angular-eslint/no-host-metadata-property': 'error',
        '@angular-eslint/no-input-rename': 'error',
        '@angular-eslint/no-inputs-metadata-property': 'error',
        '@angular-eslint/no-output-on-prefix': 'error',
        '@angular-eslint/no-output-rename': 'error',
        '@angular-eslint/no-outputs-metadata-property': 'error',
        '@angular-eslint/use-lifecycle-interface': 'error',
        '@angular-eslint/use-pipe-transform-interface': 'error',
        '@typescript-eslint/consistent-type-definitions': 'error',
        '@typescript-eslint/dot-notation': 'off',
        '@typescript-eslint/explicit-member-accessibility': [
          'off',
          {
            accessibility: 'explicit'
          }
        ],
        '@typescript-eslint/member-delimiter-style': [
          'error',
          {
            multiline: {
              delimiter: 'semi',
              requireLast: true
            },
            singleline: {
              delimiter: 'semi',
              requireLast: false
            }
          }
        ],
        '@typescript-eslint/member-ordering': 'error',
        '@typescript-eslint/naming-convention': [
          'error',
          {
            selector: ['typeLike'],
            format: ['PascalCase']
          },
          {
            selector: ['variableLike', 'memberLike', 'method'],
            format: ['camelCase', 'snake_case'],
            leadingUnderscore: 'allow',
            trailingUnderscore: 'forbid'
          },
          {
            selector: ['variable'],
            modifiers: ['const'],
            format: ['camelCase', 'PascalCase', 'UPPER_CASE']
          },
          {
            selector: ['enumMember'],
            format: ['PascalCase', 'UPPER_CASE']
          },
          {
            selector: ['property'],
            format: [],
            leadingUnderscore: 'allow',
            trailingUnderscore: 'forbid'
          }
        ],
        '@typescript-eslint/no-empty-function': 'off',
        '@typescript-eslint/no-empty-interface': 'error',
        '@typescript-eslint/no-inferrable-types': [
          'error',
          {
            ignoreParameters: true
          }
        ],
        '@typescript-eslint/no-misused-new': 'error',
        '@typescript-eslint/no-non-null-assertion': 'off',
        '@typescript-eslint/no-shadow': [
          'error',
          {
            hoist: 'all'
          }
        ],
        '@typescript-eslint/no-unused-expressions': 'error',
        '@typescript-eslint/no-use-before-define': 'error',
        '@typescript-eslint/prefer-function-type': 'error',
        '@typescript-eslint/semi': ['error', 'always'],
        '@typescript-eslint/type-annotation-spacing': 'error',
        '@typescript-eslint/unified-signatures': 'error',
        'arrow-body-style': 'error',
        'constructor-super': 'error',
        eqeqeq: ['error', 'smart'],
        'guard-for-in': 'error',
        'id-blacklist': 'off',
        'id-match': 'off',
        'no-bitwise': 'error',
        'no-caller': 'error',
        'no-console': 'off',
        'no-debugger': 'error',
        'no-empty': 'off',
        'no-eval': 'error',
        'no-fallthrough': 'error',
        'no-new-wrappers': 'error',
        'no-restricted-imports': ['error', 'rxjs/Rx'],
        'no-throw-literal': 'error',
        'no-undef-init': 'error',
        'no-underscore-dangle': 'off',
        'no-var': 'error',
        'prefer-const': 'error',
        radix: 'error',
        'import/order': [
          'error',
          {
            'newlines-between': 'always',
            alphabetize: {
              order: 'asc',
              caseInsensitive: true
            },
            groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index', 'object', 'type']
          }
        ],
        'import/no-unresolved': 'error'
      }
    },
    {
      files: ['*.html'],
      extends: ['plugin:@angular-eslint/template/recommended'],
      rules: {}
    }
  ]
};
