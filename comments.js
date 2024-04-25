// create web server
// create a web server with express
// import express
const express = require('express');
// create an express app
const app = express();
// create port
const port = 3000;
// create a route
app.get('/', (req, res) => {
    res.send('Hello World!');
});
// create a route
app.get('/comments', (req, res) => {
    res.send('Comments');
});
// listen to port
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
// create a route
app.get('/comments', (req, res) => {
    res.send('Comments');
});
// create a route
app.get('/comments/:id', (req, res) => {
    res.send(`Comments ${req.params.id}`);
});
// create a route
app.get('/comments/:id/:author', (req, res) => {
    res.send(`Comments ${req.params.id} by ${req.params.author}`);
});
// create a route
app.get('/comments/:id/:author/:date', (req, res) => {
    res.send(`Comments ${req.params.id} by ${req.params.author} on ${req.params.date}`);
});
// create a route
app.get('/comments/:id/:author/:date/:time', (req, res) => {
    res.send(`Comments ${req.params.id} by ${req.params.author} on ${req.params.date} at ${req.params.time}`);
});
// create a route
app.get('/comments/:id/:author/:date/:time/:content', (req, res) => {
    res.send(`Comments ${req.params.id} by ${req.params.author} on ${req.params.date} at ${req.params.time} with content: ${req.params.content}`);
});
// create a route
app.get('/comments/:id/:author/:date/:time/:content/:likes', (req, res) => {
    res.send(`Comments ${req.params.id} by ${req.params.author} on ${req.params.date} at ${req.params.time} with content: ${req.params.content} with ${req.params.likes} likes`);
});
// create a route
app.get('/comments/:id/:author/:date/:time/:content/:likes/:dislikes', (req, res) => {
    res.send(`Comments ${req.params.id} by ${req.params.author} on ${req.params.date} at ${req.params.time} with content: ${req.params.content} with ${req.params.likes} likes and ${req.params.dislikes} dislikes`);
});