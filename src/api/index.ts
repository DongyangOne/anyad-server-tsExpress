const router = require("express").Router()

router.use("/user", require("./user"))
router.use("/module", require("./module"))
router.use("/board", require("./board"))
router.use("/access", require("./access"))
router.use("/video", require("./video"))

module.exports = router
export {}
