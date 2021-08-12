const config =  require('./config/config');
const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const cors = require('cors');
const helmet = require('helmet');
const cookieParser = require('cookie-parser');


const app = express();

app.use(express.json());

// Connection URL
mongoose.Promise = global.Promise
mongoose.connect(config.mongoUri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true })
mongoose.connection.on('error', () => {
  throw new Error(`unable to connect to database: ${config.mongoUri}`)
})
//secure apps by setting varios http headers
app.use(helmet());
// enable CORS - cross origin resource sharing

app.use(cors())

//Use routes
app.use('/api/items',require('./routes/api/items'));
app.use('/', require('./routes/api/user.routes'));
app.use('/', require('./routes/api/auth.routes'))
/**
 * serve static assets if in production
 */
if(process.env.NODE_ENV === 'production'){
  // set static folder
  app.use(express.static('client/build'));
  app.get('*',(req, res)=>{
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

app.listen(config.port, (err) => {
  if (err) {
    console.log(err)
  }
  console.info('Server started on port %s.', config.port)
})

// Catch unauthorised errors
app.use((err, req, res, next) => {
  if (err.name === 'UnauthorizedError') {
    res.status(401).json({"error" : err.name + ": " + err.message})
  }else if (err) {
    res.status(400).json({"error" : err.name + ": " + err.message})
    console.log(err)
  }
})