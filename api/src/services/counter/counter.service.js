// Initializes the `counter` service on path `/counter`
const createService = require('feathers-nedb');
const createModel = require('../../models/counter.model');
const hooks = require('./counter.hooks');
const filters = require('./counter.filters');

module.exports = function () {
  const app = this;
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    name: 'counter',
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/counter', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('counter');

  service.hooks(hooks);

  if (service.filter) {
    service.filter(filters);
  }
};
