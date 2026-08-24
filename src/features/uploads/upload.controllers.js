import { uploadFileService, deleteFileService } from "./upload.service.js";

export const uploadFile = async (req, res) => {
  try {
    const result = await uploadFileService(req.file);

    return res.status(200).json({
      success: true,
      message: "File upload successfully.",
      data: result,
    });
  } catch(error) {
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