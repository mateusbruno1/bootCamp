module.exports = {
  dialect:'postgres',
  host:'localhost',
  username: 'postgres',
  password:'docker',
  port:5433,
  database:'goBarber',
  define: {
    timestamps:true,
    underscored:true,
    underscoredall:true,
  },
};