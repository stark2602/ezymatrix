const mongoose = require('mongoose');
const dbURI = 'mongodb://localhost:27017/ezymetrics';

mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.log(err));

module.exports = mongoose;
