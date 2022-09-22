const router = require("express").Router()
const access = require("./access.service")
import passport from "passport"

router.get(
  "/",
  passport.authenticate("jwt", { session: false }),
  access.getAccessList
)
router.get("/:idx", access.getAccess)
router.patch(
  "/:idx",
  passport.authenticate("jwt", { session: false }),
  access.buyAccess
)

module.exports = router
export {}
