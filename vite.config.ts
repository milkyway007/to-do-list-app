import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default defineConfig({
	root: 'client',
	build: {
		outDir: '../server/dist',
		emptyOutDir: true,
	},
	plugins: [
		react({
			babel: {
				plugins: [['babel-plugin-react-compiler']],
			},
		}),
	],
});
