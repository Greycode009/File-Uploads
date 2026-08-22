import express from "express";
import morgan from "morgan";
import upload from "./middleware/upload.js";

const app = express();

app.use(express.json());
app.use(morgan("dev"));

app.get("/", (res, req) => {
  res.json({
    message: "File Uploads API",
  });
});

app.post("/upload", upload.single("file"), (req, res) => {
  console.log(req.body);
  console.log(req.file);

  res.json({
    message: "Upload request received",
    body: req.body,
    file: req.file,
  });
});

export default app;
