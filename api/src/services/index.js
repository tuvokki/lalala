const users = require('./users/users.service.js');
const games = require('./games/games.service.js');
const counter = require('./counter/counter.service.js');
module.exports = function () {
  const app = this; // eslint-disable-line no-unused-vars
  app.configure(users);
  app.configure(games);
  app.configure(counter);
};
