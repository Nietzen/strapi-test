module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        client: env('DATABASE_CLIENT'),
        host: env('DATABASE_HOST'),
        DATABASE_PORT: env('DATABASE_CLIENT'),
        username: env('DATABASE_USERNAME'),
        password: env('DATABASE_PASSWORD'),
        database: env('DATABASE_NAME'),
        schema: "public"
      },
      options: {
        useNullAsDefault: true,
        debug: env('APP_DEBUG')
      },
    },
  },
});
