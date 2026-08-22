import { Router } from "express";
import { uploadFile } from "./upload.controllers.js";
import upload from "../../middleware/upload.js";

const uploadRouter = Router();

uploadRouter.post("/upload", upload.single("file"), uploadFile);

export default uploadRouter;
