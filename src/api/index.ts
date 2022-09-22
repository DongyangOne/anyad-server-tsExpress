const router = require("express").Router()

router.use("/user", require("./user"))
router.use("/module", require("./module"))
router.use("/board", require("./board"))

module.exports = router
export {}
