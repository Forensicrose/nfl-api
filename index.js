const express = require('express')
// const teams = require('./teams')
const { createNewTeams, getTeamID, listOfTeams } = require('./controllers/teams')

const app = express()


app.get('/', (request, response) => {
  return response.send('Hello World')
})

app.use(express.json())



app.post('/teams', createNewTeams)

app.get('/teams/:id', getTeamID)

app.get('/teams', listOfTeams)

app.listen(1337, () => {
  console.log('we are out of fries')// eslint-disable-line no-console
})
