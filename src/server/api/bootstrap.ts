import { connectDatabase } from "../persistence/database.ts";
import { createServer } from "./server.ts";
import ViteExpress from 'vite-express';
import { PORT } from './constants/constants.ts';
import { initializeDatabase } from "../persistence/initialization/initialize.ts";

export async function bootstrap() {
    await connectDatabase();
    await initializeDatabase();

    const app = createServer();

    ViteExpress.listen(app, PORT, () => {
        console.log(`Server is listening on port ${PORT}...`);
    });
}