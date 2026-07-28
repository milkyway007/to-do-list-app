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
			'jsdoc/require-param': 'error',
			'jsdoc/require-returns': 'error',
			'jsdoc/require-param-description': 'error',
			'jsdoc/require-returns-description': 'error',
			'jsdoc/require-jsdoc': [
				'error',
				{
					publicOnly: true,
					require: {
						ClassDeclaration: true,
						MethodDefinition: true,
						FunctionDeclaration:true,
						ArrowFunctionExpression:true,
						ClassExpression:true,
						FunctionExpression:true
					},
				},
			],
			'jsdoc/require-description': 'error',
			'jsdoc/require-description-complete-sentence': 'error',
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
			import: importPlugin,
			reactHooks: pluginObject,
			prettier: prettierPlugin,
		},
		rules: {
			quotes: ['error', 'single'],
			'import/first': 'error',
			'import/newline-after-import': 'error',
			'import/no-duplicates': 'error',
			'import/consistent-type-specifier-style': ['error', 'prefer-inline'],
			'prettier/prettier': 'error',
		},
	},
	{
		files: ['src/client/**/*.{ts,tsx}'],
		plugins: {
			'simple-import-sort': simpleImportSort,
		},
		rules: {
			'simple-import-sort/imports': [
				'error',
				{
					groups: [
						['^react', '^@?\\w'],
						['^bulma/(.*)$'],
						['^@fortawesome/(.*)$'],

						['^.*/assets/.*$'],

						['^.*/components/.*$'],
						['^.*/controls/.*$'],
						['^.*/layout/.*$'],

						['^.*/constants/.*$'],

						['^.*/model/.*$'],
						['^.*/ui/.*$'],
						['^.*/view-model/.*$'],


						['^.*/services/.*$'],
						['^.*/context/.*$'],
						['^.*/date-time/.*$'],
						['^.*/icons/.*$'],

						[
							'^(?!.*(assets|components|constants|model|services|module.css).*)[./].*',
						],
						['^[./]'],
						['^(.*)module.css$'],
					],
				},
			],
			'simple-import-sort/exports': 'error',
		},
	},
	{
		files: ['src/server/**/*.{ts,tsx}'],
		plugins: {
			'simple-import-sort': simpleImportSort,
		},
		rules: {
			'simple-import-sort/imports': [
				'error',
				{
					groups: [
						['^express$'],
						['^vite-express$'],
						['^mongoose$'],

						//projects
						['^.*/api/.*$'],
						['^.*/application/.*$'],
						['^.*/domain/(?!interfaces/).*$'],
						['^.*/domain\\.interfaces/.*$'],
						['^.*/persistence/(?!interfaces/).*$'],
						['^.*/persistence\\.interfaces/.*$'],
						
						//api project
						['^.*/constants/.*$'],
						['^.*/dtos/.*$'],
						['^.*/infrastructure/.*$'],
						['^.*/middlewares/.*$'],
						['^.*/utils/.*$'],
						
						//application project
						['^.*/inputs/.*$'],
						['^.*/services/.*$'],
						['^.*/use-cases/.*$'],

						//domain project
						['^.*/repositories\\.interfaces/.*$'],

						//persistence project
						['^.*/database/.*$'],
						['^.*/mappers/.*$'],
						['^.*/models/.*$'],
						['^.*/repositories/(?!interfaces/).*$'],

						//persistence.interfaces project
						['^.*/persistence\\.interfaces/.*$'],

						//api project/infrastructure folder
						['^.*/controllers/.*$'],
						['^.*/routes/.*$'],

						//application project/services folder/initialization folder
						['^.*/initialization/(?!interfaces/).*$'],

						//persistence.interfaces project/initialization folder
						['^.*/initialization\\.interfaces/.*$'],

						['^\\.'],
					],
				},
			],
			'simple-import-sort/exports': 'error',
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
