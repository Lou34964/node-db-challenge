const express = require('express');

const server = express();

const ProjectRouter = require('./api/projects/project-router');
const TaskRouter = require('./api/tasks/task-router');
const ResourceRouter = require('./api/resources/resource-router');

server.use(express.json());

server.use('/api/projects', ProjectRouter);
server.use('/api/tasks', TaskRouter);
server.use('/api/resources', ResourceRouter);
module.exports = server;