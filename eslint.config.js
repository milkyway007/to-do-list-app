import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import { defineConfig, globalIgnores } from 'eslint/config';
import { jsdoc } from 'eslint-plugin-jsdoc';

export default defineConfig([
	globalIgnores(['dist']),
	eslint.configs.recommended,
	tseslint.configs.recommendedTypeChecked,
	{
		languageOptions: {
			parserOptions: {
				projectService: true,
			},
		},
	},
	tseslint.configs.strictTypeChecked,
	tseslint.configs.stylisticTypeChecked,
	jsdoc({
		config: 'flat/recommended',
		rules: {
			'jsdoc/check-values': [
				'error',
				{
					allowedLicenses: ['MIT', 'ISC'],
				},
			],
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
]);
