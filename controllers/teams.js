const models = require('../models')

const listOfTeams = async (request, response) => {
  const teams = await models.Teams.findAll()

  return response.send(teams)
}

const getTeamID = async (request, response) => {
  const { id } = request.params

  const getTeamID = await models.Teams.findOne({ where: { id } })

  return response.send(getTeamID)
}


const createNewTeams = async (request, response) => {
  const {
    location, mascot, abbreviation, division, conference
  } = request.body

  if (!location || !mascot || !abbreviation || !conference || !division) {
    return response.status(400).send('missing fields')
  }
  const createNewTeams = await models.Teams.create({
    location, mascot, abbreviation, conference, division
  })



  response.status(201).send(createNewTeams)
}


module.exports = { listOfTeams, createNewTeams, getTeamID }
