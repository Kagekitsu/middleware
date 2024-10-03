import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
import bodyParser  from "body-parser";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;


app.use(bodyParser.urlencoded({extended: true}));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.post("/submit", (req, res) => {
  console.log(req.body);
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

// Use npm to install the body-parser module
// Run index1.js with nodemon
// Mount the middleware using the Express.use()method
// Specify .urlencoded({extended: true}) to create a body for URL-encoded requests like our form submission
//Write a .post("/submit") handler where you console.log() the form contents when the user clicks the submit button