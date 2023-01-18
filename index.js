const server = http.createServer((req, res) => {
	res.write(`Hello world`);
	res.end();
});

server.listen(process.env.PORT || 5000, () => {
	console.log(`Server running on ${PORT}`);
});
