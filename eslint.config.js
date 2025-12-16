import eslint from '@eslint/js';
import { defineConfig, globalIgnores } from 'eslint/config';
import importPlugin from 'eslint-plugin-import';
import { jsdoc } from 'eslint-plugin-jsdoc';
import pluginObject from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import simpleImportSort from 'eslint-plugin-simple-import-sort';
import tseslint from 'typescript-eslint';

export default defineConfig([
	globalIgnores(['node_modules/**', 'public/**']),
	eslint.configs.recommended,
	tseslint.configs.recommendedTypeChecked,
	{
		languageOptions: {
			parserOptions: {
				projectService: true,
				tsconfigRootDir: import.meta.dirname,
			},
		},
	},
	tseslint.configs.strictTypeChecked,
	tseslint.configs.stylisticTypeChecked,
	reactRefresh.configs.vite,
	jsdoc({
		config: 'flat/recommended',
		rules: {
			'jsdoc/require-returns-type': 0,
			'jsdoc/require-param-type': 0,
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
		files: ['**/*.js'],
		extends: [tseslint.configs.disableTypeChecked],
	},
	{
		files: ['**/*.{js,jsx,ts,tsx}'],
		plugins: {
			'simple-import-sort': simpleImportSort,
			import: importPlugin,
			reactHooks: pluginObject,
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
		},
	},
]);
