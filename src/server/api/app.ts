import { bootstrap } from './bootstrap.ts';

bootstrap().catch((error) => {
	console.error('Fatal startup error:', error);
	process.exit(1);
});
