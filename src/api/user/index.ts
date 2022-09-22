const router = require("express").Router()
const user = require("./user.service")

router.post("/", user.localSave)

module.exports = router
export {}
