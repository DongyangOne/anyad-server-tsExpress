const router = require("express").Router()
const user = require("./user.service")

router.post("/", user.localSave)
router.post("/local", user.localLogin)
router.post("/sendmail", user.sendMail)

module.exports = router
export {}
