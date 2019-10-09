const multer = require("multer");
const path = require("path");

module.exports = {
  storage: multer.diskStorage({
    destination: path.resolve(__dirname, "..", "..", "uploads"),
    filename: (request, file, callback) => {
      const extension = path.extname(file.originalname);
      const filename = `${Date.now()}${extension}`;
      callback(null, filename);
    }
  })
};