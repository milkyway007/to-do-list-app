import Setting from "../models/setting.ts";
import { createTasks } from "./taskInitializer.ts";

async function isInitialized(): Promise<boolean> {
    return await Setting.findOne({ key: 'initialized' }).then(setting => {
        return setting !== null;
    });
}

async function markInitialized(): Promise<void> {
    await Setting.insertOne({
        key: "initialized",
    });
}

export async function initializeDatabase(): Promise<void> {
    const initialized = await isInitialized();
    if (initialized) {
        return;
    }

    await createTasks();
    console.log('Default tasks created.');

    await markInitialized();
    console.log('Database marked as initialized.');
}