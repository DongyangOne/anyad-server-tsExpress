import passport from "passport"

const router = require("express").Router()
const board = require("./board.service")
const { uploadImg } = require("../../utils/multer")

router.get("/", board.getBoardList)
router.get("/:idx", board.getBoard)
router.get("/keyword", board.searchBoard)
router.post(
  "/:idx",
  //   uploadImg.single("image"),
  passport.authenticate("jwt", { session: false }),
  board.saveBoard
)

module.exports = router
export {}
