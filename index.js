const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const routes = require('./routes/routes');

const app = express();
const PORT = process.env.PORT || 3000;

// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Connect to MongoDB
// mongoose.connect("mongodb://test-account-for-dev-db:56J5VxdkrHalFsHd7SgiAOtqqVWYScrQIOIq0sFLIuCI2WKBI5tq3KT3p6LX0eN715RAYn6uly6kACDbE1VoNQ==@test-account-for-dev-db.mongo.cosmos.azure.com:10255/?ssl=true&retrywrites=false&maxIdleTimeMS=120000&appName=@test-account-for-dev-db@", function (err, db) {
//   db.close();
// });
// mongoose.connect('mongodb://127.0.0.1:27017/bus_ticket_db', { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connect('mongodb://test-account-for-dev-db:56J5VxdkrHalFsHd7SgiAOtqqVWYScrQIOIq0sFLIuCI2WKBI5tq3KT3p6LX0eN715RAYn6uly6kACDbE1VoNQ==@test-account-for-dev-db.mongo.cosmos.azure.com:10255/?ssl=true&replicaSet=globaldb&retrywrites=false&maxIdleTimeMS=120000&appName=@test-account-for-dev-db@', { useNewUrlParser: true, useUnifiedTopology: true , dbName:"bus_ticket_db"});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
    console.log('Connected to MongoDB');
});

// Routes
app.use('/api', routes);

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
