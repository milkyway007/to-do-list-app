/**
 * Represents a class constructor.
 */
export type Constructor<T> = new (...args: never[]) => T;
