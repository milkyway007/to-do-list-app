import { PORT } from './constants';
import { getFilePath, sendFile } from './helpers';

import http from 'http';

const server = http.createServer((req, res) => {
	const url = req.url ?? '/';
	const filePath = getFilePath(url);

	sendFile(res, filePath);
});

server.listen(PORT, () => {
	console.log('Server is running');
});
