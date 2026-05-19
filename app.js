const http = require("http");

const server = http.createServer((req, res) => {
  res.write("CI/CD Pipeline Project Running Successfully");
  res.end();
});

server.listen(5000, () => {
  console.log("Server running on port 5000");
});