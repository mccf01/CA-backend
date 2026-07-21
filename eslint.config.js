import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import globals from 'globals';

export default tseslint.config(
  {
    ignores: ['dist/', 'node_modules/', 'prisma/generated/'],
  },

  eslint.configs.recommended,

  ...tseslint.configs.recommended,

  // Arquivos JavaScript executados no Node
  {
    files: ['**/*.js'],
    languageOptions: {
      globals: globals.node,
    },
  },

  // Arquivos TypeScript
  {
    files: ['src/**/*.ts'],
    languageOptions: {
      globals: globals.node,
    },

    rules: {
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          argsIgnorePattern: '^_',
        },
      ],

      '@typescript-eslint/no-explicit-any': 'warn',

      'no-console': [
        'warn',
        {
          allow: ['warn', 'error', 'info'],
        },
      ],
    },
  },
);