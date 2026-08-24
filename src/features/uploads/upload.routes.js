import { Router } from "express";
import { deleteFile, deleteFiles, uploadFile } from "./upload.controllers.js";
import upload from "../../middleware/upload.js";

const uploadRouter = Router();

uploadRouter.post("/upload", upload.single("file"), uploadFile);
uploadRouter.delete("/upload/:fileName", deleteFile);
uploadRouter.delete("/uploads", deleteFiles);

export default uploadRouter;
