module.exports = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'developer',
  password: 'developer',
  database: 'test',
  synchronize: false,
  logging: false,
  entities: [
    'src/entities/**/*'
  ],
  migrations: [
    'src/migrations/**/*.ts'
  ],
  cli: {
    migrationsDir: 'src/migrations'
  },
  migrationsTableName: '_migrations'
};
