const router = require("express").Router()
const moduleApi = require("./module.service")
import passport from "passport"

router.get(
  "/",
  passport.authenticate("jwt", { session: false }),
  moduleApi.getModuleList
)
router.get("/:idx", moduleApi.getModule)
router.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  moduleApi.saveModule
)

module.exports = router
export {}
