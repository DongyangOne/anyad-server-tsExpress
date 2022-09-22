import multer from "multer"

const randomNumber = require("../config/emailData").number()
const storageVideo = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, "source/video/")
    },
    filename: (req, file, cb) => {
      cb(null, `${randomNumber}-${Date.now()}.mp4`)
    },
  }),
  uploadVideo = multer({ storage: storageVideo }),
  storageImg = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, "source/images/")
    },
    filename: (req, file, cb) => {
      cb(null, `${randomNumber}-${Date.now()}.jpeg`)
    },
  }),
  uploadImg = multer({ storage: storageImg })

module.exports = { uploadVideo, uploadImg }
