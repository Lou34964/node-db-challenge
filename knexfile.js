// Update with your config settings.

module.exports = {

  development: {
    client: 'sqlite3',
    useNullAsDefault: true,
    connection: {
      filename: './dev.sqlite3'
    },
    migrations: {
      directory: './data/migrations'
    },
    seeds:{
      directory: './data/seeds'
    },
    pool:{
      afterCreate: (conn, done) => {

        conn.run('PRAGME foreign_keys = ON', done);
      }
    }
  },

};
