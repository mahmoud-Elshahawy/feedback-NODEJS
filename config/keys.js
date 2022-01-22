// Determines which keys should be used
if (process.env.NODE_ENV === 'production') {
    // Use Production env keys.
    module.exports = require('./prod');
} else {
     //Use development env keys.
     module.exports = require('./dev');
}