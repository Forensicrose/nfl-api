const Sequelize = require('sequelize')
const teams = require('./teams')

const connection = new Sequelize('nfl', 'teamsUser', 'nFlTeAm$', {
  host: 'localhost', dialect: 'mysql', define: { timestamps: false }
})

const Teams = teams(connection, Sequelize)

module.exports = { Teams }
