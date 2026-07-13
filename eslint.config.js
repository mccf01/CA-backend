import eslint from '@eslint/js';
import tseslint from "@typescript-eslint";

export default tsesling.config(
    eslint.config.recommended,
    ...tseslint.config.recommended,
    {
        files: ['src/**/*.ts'],
        rules: {
            '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
            '@typescript-eslint/no-explicit-any': 'warn', // Avisa se usar 'any' para forçar tipagem
            'no-console': ['warn', { allow: ['warn', 'error'] }], // Evita consoles esquecidos em produção
        },
    },
    {
        ignores: ['dist/', 'node_modules', './prisma/generated/'],
    },
);