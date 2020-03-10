module.exports = {
  dialect:'postgres',
  host:'localhost',
  username: 'postgres',
  password:'docker',
  databse:'goBarber',
  define: {
    timestamps:true,
    underscored:true,
    underscoredall:true,
  },
};