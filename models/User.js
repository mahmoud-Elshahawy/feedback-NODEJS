const mongoose = require('mongoose');
// Following 2 lines to create schema object
//const Schema = mongoose.Schema;
const { Schema } = mongoose;

const userSchema = new Schema({
    googleId: String,
    Name: String
})

// Export Schema in users.
mongoose.model('users',userSchema);