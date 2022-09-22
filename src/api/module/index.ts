const router = require("express").Router()
const moduleApi = require("./module.service")
import passport from "passport"

router.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  moduleApi.saveModule
)

module.exports = router
export {}
