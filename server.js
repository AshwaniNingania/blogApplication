const express = require('express');
const app = express();

app.use(express.static(__dirname + '/dist'));
const jsonServer = require('json-server');
const server = jsonServer.create();
const routerJson = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 3000;

app.use('/api', middlewares);
app.use('/api', routerJson);
app.listen(process.env.PORT || 4200);

