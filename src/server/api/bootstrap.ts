import { connectDatabase } from "../infrastructure/persistence/database.ts";
import { createServer } from "./server.ts";
import ViteExpress from 'vite-express';
import { PORT } from './constants/constants.ts';

export async function bootstrap() {
    await connectDatabase();

    const app = createServer();

    ViteExpress.listen(app, PORT, () => {
        console.log(`Server is listening on port ${PORT}...`);
    });
}