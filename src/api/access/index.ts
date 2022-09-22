const router = require("express").Router()
const access = require("./access.service")
import passport from "passport"

router.get(
  "/",
  passport.authenticate("jwt", { session: false }),
  access.getAccessList
)
router.get("/:id", access.getAccess)
router.patch(":id", access.buyAccess)

module.exports = router
export {}
