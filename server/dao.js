var Datastore = require('nedb');

var db = {
    client: new Datastore({ filename: 'db/client.db', autoload: true }),
    project: new Datastore({ filename: 'db/project.db', autoload: true }),
    users: new Datastore({ filename: 'db/users.db', autoload: true }),

};

module.exports = db;