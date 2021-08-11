const express = require('express')
const teams = require('./teams')


const app = express()

// create a get route that returns a list of team data

// shows route is responding 
app.get('/', (request, response) => {
  return response.send('Hello World')
})

app.use(express.json())



app.post('/teams', (request, response) => {
  // eslint-disable-next-line no-console
  console.log(request.body)
  const {
    location, mascot, abbreviation, division, conference
  } = request.body

  // check response body for all fields
  if (!location || !mascot || !abbreviation || !conference || !division) {
    return response.status(400).send('missing fields')
  }
  // if we have all of the fields get id of last field and add 1
  const newTeamID = teams[teams.length - 1].id + 1
  // if not, create new team from data provided 
  const newTeamObj = {
    id: newTeamID,
    location: location,
    abbreviation: abbreviation,
    mascot: mascot,
    conference: conference,
    division: division
  }

  // add it to teams array
  teams.push(newTeamObj)
  // respond with the newly created team
  response.send(newTeamObj)
})

// shows route is responding
//* GET /teams/ID - Returns the team associated with that ID, where ID is a number (ex. `/teams/12`)

app.get('/teams/:id', (request, response) => {
  // return the team with the id that matches the param from the request. That is done with the request.params

  // make a request to team 19 by going through each object in the teams array and return the team that matches the id from the request. For example, when localhost:1337/teams/19 is typed into the browswer(front-end), it is stored in request.params.id. As the teams array is being filter, when it comes upon 19, 19 will be stored in the teamObject variable and returned. What's returned is the Philadelphia Eagles because they are team 19. It will show in the browser. 

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
