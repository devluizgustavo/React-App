import react from 'eslint-plugin-react';
import prettier from 'eslint-plugin-prettier';
import reactHooks from 'eslint-plugin-react-hooks';
import { fixupPluginRules } from '@eslint/compat';
import globals from 'globals';
import babelParser from '@babel/eslint-parser';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import js from '@eslint/js';
import { FlatCompat } from '@eslint/eslintrc';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
});

export default [
  // Extensões de configuração recomendadas
  ...compat.extends('plugin:react/recommended', 'plugin:prettier/recommended'),
  {
    plugins: {
      react,
      prettier,
      'react-hooks': fixupPluginRules(reactHooks),
    },

    languageOptions: {
      globals: {
        ...globals.browser,
        Atomics: 'readonly',
        SharedArrayBuffer: 'readonly',
      },
      parser: babelParser,
      ecmaVersion: 'latest',
      sourceType: 'module',
      parserOptions: {
        requireConfigFile: false,
        babelOptions: {
          presets: ['@babel/preset-react'],
        },
        ecmaFeatures: {
          jsx: true,
        },
      },
    },

    rules: {
      // Regras específicas para Prettier
      'prettier/prettier': 'error',
      // Regras para React
      'react/jsx-filename-extension': [
        1,
        { extensions: ['.js', '.jsx', '.tsx'] },
      ],
      // Regras para Hooks do React
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
      // Outras regras
      'import/prefer-default-export': 'off',
      'react/react-in-jsx-scope': 'off',
    },
  },
];
