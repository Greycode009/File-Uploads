import express from "express";
import morgan from "morgan";

import uploadRouter from "./features/uploads/upload.routes.js";
import uploadErrorHandler from "./middleware/uploadErrorHandler.js";

const app = express();

app.use(express.json());
app.use(morgan("dev"));

app.use("/api", uploadRouter);
app.use(uploadErrorHandler);

export default app;
