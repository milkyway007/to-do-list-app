import eslint from '@eslint/js';
import { defineConfig, globalIgnores } from 'eslint/config';
import importPlugin from 'eslint-plugin-import';
import { jsdoc } from 'eslint-plugin-jsdoc';
import prettierPlugin from 'eslint-plugin-prettier';
import pluginObject from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import simpleImportSort from 'eslint-plugin-simple-import-sort';
import tseslint from 'typescript-eslint';

export default defineConfig([
	globalIgnores([
		'node_modules/**',
		'dist/**',
		'build/**',
		'public/**',
		'.api/**',
		'vite.config.ts',
		'eslint.config.js',
	]),
	eslint.configs.recommended,
	{
		files: ['src/**/*.{ts,tsx}'],

		languageOptions: {
		parserOptions: {
			projectService: true,
			tsconfigRootDir: import.meta.dirname,
		},
		},

		extends: [
		tseslint.configs.recommendedTypeChecked,
		tseslint.configs.stylisticTypeChecked,
		],
	},
	reactRefresh.configs.vite,
	jsdoc({
		config: 'flat/recommended',
		rules: {
			'jsdoc/require-returns-type': 0,
			'jsdoc/require-param-type': 0,
			'jsdoc/require-param': 0,
			'jsdoc/require-returns': 0,
		},
		settings: {
			structuredTags: {
				see: {
					name: 'namepath-referencing',
					required: ['name'],
				},
			},
		},
	}),
	{
		files: ['src/**/*.{js,jsx,ts,tsx}'],
		plugins: {
			'simple-import-sort': simpleImportSort,
			import: importPlugin,
			reactHooks: pluginObject,
			prettier: prettierPlugin,
		},
		rules: {
			quotes: ['error', 'single'],
			'simple-import-sort/imports': [
				'error',
				{
					groups: [
						['^react', '^@?\\w'],
						['^bulma/(.*)$'],
						['^@fortawesome/(.*)$'],

						
						['^.*/services/.*$'],
						['^.*/model/.*$'],
						['^.*/utils/.*$'],
						['^.*/constants/.*$'],
						['^.*/components/.*$'],
						[
							'^(?!.*(services|model|utils|constants|components|module.css).*)[./].*',
						],
						['^[./]'],
						['^(.*)module.css$'],
					],
				},
			],
			'simple-import-sort/exports': 'error',
			'import/first': 'error',
			'import/newline-after-import': 'error',
			'import/no-duplicates': 'error',
			'import/consistent-type-specifier-style': ['error', 'prefer-inline'],
			'prettier/prettier': 'error',
		},
	},
	{
		files: ['src/**/*.{ts,tsx}'],
		rules: {
			'@typescript-eslint/restrict-template-expressions': [
				'error',
				{
					allowNumber: true,
				},
			],
		},
	},
	{
		files: ['src/**/*.js'],
		extends: [tseslint.configs.disableTypeChecked],
	},
]);
