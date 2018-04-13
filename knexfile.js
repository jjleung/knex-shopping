// Update with your config settings.

module.exports = {
  development: {
    client: "pg",
    connection: {
      host: "127.0.0.1",
      user: "shop_user",
      password: "password",
      database: "shop_db",
      charset: "utf8"
    },
    migrations: {
      directory: __dirname + "/knex/migrations"
    },
    seeds: {
      directory: __dirname + "/knex/seeds"
    }
  },

  staging: {
    client: "pg",
    connection: {
      database: "shop_db",
      user: "shop_user",
      password: "password"
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: "knex_migrations"
    }
  },

  production: {
    client: "pg",
    connection: {
      database: "shop_db",
      user: "shop_user",
      password: "password"
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: "knex_migrations"
    }
  }
};
