import {
  uploadFileService,
  deleteFileService,
  deleteFilesService,
} from "./upload.service.js";

export const uploadFile = async (req, res) => {
  try {
    const result = await uploadFileService(req.file);

    return res.status(200).json({
      success: true,
      message: "File upload successfully.",
      data: result,
    });
  } catch (error) {
    console.error("uploadFile error:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to upload file",
    });
  }
};

export const deleteFile = async (req, res) => {
  try {
    const { fileName } = req.params;

    await deleteFileService(fileName);

    return res.status(200).json({
      success: true,
      message: "File deleted successfully",
    });
  } catch (error) {
    console.error("deleteFile error:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to delete file",
    });
  }
};

export const deleteFiles = async (req, res) => {
  try {
    const { fileNames } = req.body;

    if (!Array.isArray(fileNames) || fileNames.length === 0) {
      return res.status(400).json({
        success: false,
        message: "fileNames must be a non-empty array",
      });
    }

    await deleteFilesService(fileNames);

    return res.status(200).json({
      success: true,
      message: "Files deleted successfully",
    });
  } catch (error) {
    console.error("deleteFiles error:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to delete files",
    });
  }
};
