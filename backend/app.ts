import http from 'http';
const PORT = 3000;

const server = http.createServer((req, res) => {
	res.statusCode = 200;
	res.setHeader('Content-Type', 'text/plain');
	res.end('TO-DO-LIST-APP');
});

server.listen(PORT, () => {
	console.log('Server is running');
});
