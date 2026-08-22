export const uploadFile = async (req, res) => {
  return res.status(201).json({
    success: true,
    message: "File upload successfully.",
    body: req.body,
    file: req.file,
  });
};
