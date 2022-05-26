import express from "express";
import cors from "cors";
import books from "./books.json";

const port = 5000;
const app = express();

app.use(cors());

app.get(`/`, (req, res) => {
	res.send(books);
});
app.listen(port, () => console.log(`Slušam zahtjeve http://localhost:${port}`));
