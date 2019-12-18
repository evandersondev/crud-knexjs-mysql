const server = require("./app");
const PORT = process.env.PORT || 8080;

server.listen(PORT, err => {
  if (err) console.log(`Error: ${err}`);

  console.log(`Server running on port: ${PORT}`);
});
