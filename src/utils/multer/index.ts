import multer from "multer"

const getNumber = () => {
  let number = Math.floor(Math.random() * 1000000) + 100000
  if (number > 1000000) number -= 100000
  return number
}

const storageVideo = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, "source/video/")
    },
    filename: (req, file, cb) => {
      cb(null, `${getNumber()}-${Date.now()}.mp4`)
    },
  }),
  uploadVideo = multer({ storage: storageVideo }),
  storageImg = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, "source/images/")
    },
    filename: (req, file, cb) => {
      cb(null, `${getNumber()}-${Date.now()}.jpeg`)
    },
  }),
  uploadImg = multer({ storage: storageImg })

module.exports = { uploadVideo, uploadImg }
