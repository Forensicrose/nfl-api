const teams = (connection, Sequelize) => {
  return connection.define('teams', {
    id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
    location: { type: Sequelize.STRING },
    mascot: { type: Sequelize.STRING },
    abbreviation: { type: Sequelize.STRING },
    conference: { type: Sequelize.ENUM('AFC', 'NFC') },
    division: { type: Sequelize.ENUM('North', 'West', 'East', 'South') },
  })
}

module.exports = teams

