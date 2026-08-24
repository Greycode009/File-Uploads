import { Router } from "express";
import { deleteFile, uploadFile } from "./upload.controllers.js";
import upload from "../../middleware/upload.js";

const uploadRouter = Router();

uploadRouter.post("/upload", upload.single("file"), uploadFile);
uploadRouter.delete("/upload/:fileName", deleteFile);

export default uploadRouter;
