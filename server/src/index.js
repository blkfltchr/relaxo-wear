require('dotenv').config({ path: 'variables.env' });
const createServer = require('./createServer');
const db = require('./db');

const server = createServer();

// Express middleware to handle cookies with JWT

// Express middleware to populate current user 

server.start({
  cors: {
    credentials: true,
    origin: process.env.FRONTEND_URL
  },
}, router => {
  console.log(`Server is now running on port ${router.port} ☁️️️️️️️️ ☁️ ☁️`)
})