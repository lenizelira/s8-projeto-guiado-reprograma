const express = require("express")
const app = require("../app")
const router = express.Router()
const controller = require("../controller/gamesController")

router.get("/jogos", controller.getAll)
router.get("/jogos/:id", controller.getGamesById)

module.exports = router