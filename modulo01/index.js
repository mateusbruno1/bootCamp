const express = require('express');

const server = express();
// query params = ?teste=1
// route params = /users/1
// Request  body = {"name":"mateus","email":"teste@hotmail.com"}

// CRUD de usuarios
const users = ['Diego','mateus'];

server.get('/users',(req,res) => {
  return res.json(users)
})

server.get('/teste',(req,res) => {
  const nome = req.query.nome; 
  return res.send('Hello world');
})
server.listen(8080);
