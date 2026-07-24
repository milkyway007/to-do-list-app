export interface Initializer {
    run(): Promise<void>;
}