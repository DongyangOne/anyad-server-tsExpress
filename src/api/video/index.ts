import passport from "passport"

const router = require("express").Router()
const video = require("./video.service")
const { uploadVideo } = require("../../utils/multer")

router.post(
  "/:idx",
  uploadVideo.single("video"),
  passport.authenticate("jwt", { session: false }),
  video.uploadVideo
)

module.exports = router
export {}
