const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const keys = require('./config/keys');
require('./models/User');
require('./services/passport');
mongoose.connect(keys.mongoURI);
// Create Express APP 
const app = express(); 

// Session experation period and key creation.
app.use(
    cookieSession({
        maxAge: 30*24*60*60*100,
        keys: [keys.cookieKey]
    })
);
app.use(passport.initialize());
app.use(passport.session());
// Call exported function from authRoutes.js file
require('./routes/authRoutes')(app);

// Constant Port number assigned dynamically through deployment enviroment or 5000 through development enviroment
const PORT = process.env.PORT || 5000;
app.listen(PORT);