const router = require("express").Router()

router.use("/user", require("./user"))
router.use("/module", require("./module"))

module.exports = router
export {}
