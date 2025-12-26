import { MIME_TYPES } from './constants';

import fs from 'fs';
import http from 'http';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const distPath = path.join(__dirname, '..', '..', 'dist');

/**
 * Resolves the absolute file system path for a requested URL.
 *
 * - Maps the root URL (`/`) to `index.html`.
 * - Maps all other URLs to files inside the static `dist` directory.
 *
 * Used by the HTTP server to locate static assets and the SPA entry point.
 */
export function getFilePath(url: string): string {
	if (url === '/') {
		return path.join(distPath, 'index.html');
	}

	return path.join(distPath, url);
}

/**
 * Sends a static file to the client.
 *
 * - Determines the appropriate `Content-Type` based on the file extension.
 * - Reads the file from disk and writes it to the HTTP response.
 * - If the file does not exist, falls back to sending `index.html`
 *   to support client-side routing in a single-page application (SPA).
 */
export function sendFile(res: http.ServerResponse, filePath: string): void {
	const ext = path.extname(filePath);
	const contentType = MIME_TYPES[ext] ?? 'application/octet-stream';

	fs.readFile(filePath, (error, data) => {
		if (error) {
			sendIndexHtml(res);

			return;
		}

		res.writeHead(200, { 'Content-Type': contentType });
		res.end(data);
	});
}

/**
 * Sends the application's `index.html` file to the client.
 *
 * Used as a fallback for single-page application (SPA) routing when
 * a requested static file is not found.
 *
 * If `index.html` cannot be read, responds with a 500 Internal Server Error.
 */
export function sendIndexHtml(res: http.ServerResponse): void {
	const indexPath = path.join(distPath, 'index.html');

	fs.readFile(indexPath, (error, data) => {
		if (error) {
			res.writeHead(500, { 'Content-Type': 'text/plain' });
			res.end('Internal Server Error');

			return;
		}

		res.writeHead(200, { 'Content-Type': 'text/html' });
		res.end(data);
	});
}
