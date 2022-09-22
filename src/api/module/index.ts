import passport from "passport"

const router = require("express").Router()
const user = require("./user.service")

router.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  user.localSave
)

module.exports = router
export {}
