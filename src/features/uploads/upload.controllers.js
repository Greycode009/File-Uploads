import { uploadFileService } from "./upload.service.js";

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
