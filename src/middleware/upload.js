import multer from "multer";

const upload = multer({
  dest: "uploads/",

  limits: {
    fileSize: 2 * 1024 * 1024, //2mb image size
  },

  fileFilter: (req, file, cb) => {
    if (file.mimetype.startsWith("image/")) {
      cb(null, true);
    } else {
      cb(new Error("Only image files are allowed."));
    }
  },
});

export default upload;
