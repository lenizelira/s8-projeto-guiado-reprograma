const { response, request } = require("../app")
const games = require("../model/games.json")


const getAll = (request, response) =>{
    console.log(request.url)
    response.status(200).send(games)
}

const getGamesById = (request, response) =>{
    const id = request.params.id 
    const jogo = games.find(item => item.id == id)
    if (jogo) {
        response.status(200).send(jogo)
    } else {
        response.status(404).send("Id não encontrado!")
    }
}

module.exports = {
    getAll,
    getGamesById
}