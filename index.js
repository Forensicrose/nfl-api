const express = require('express')
const teams = require('./teams')

const app = express()

// create a get route that returns a list of team data

// shows route is responding 
app.get('/', (request, response) => {
  return response.send('Hello World')
})

// shows route is responding
//* GET /teams/ID - Returns the team associated with that ID, where ID is a number (ex. `/teams/12`)

app.get('/teams/:id', (request, response) => {
  // return the team with the id that matches the param from the request. That is done with the request.params

  // make a request to team 19 by going through each object in the teams array and return the team that matches the id from the request

  const teamObj = teams.filter(team => team.id == request.params.id)

  return response.send(teamObj)
})
// passing data to the backend through params
app.get('/teams', (request, response) => {
  return response.send({ teams })
})

// ensures that the server is running
app.listen(1337, () => {
  console.log('we are out of fries')// eslint-disable-line no-console
})
