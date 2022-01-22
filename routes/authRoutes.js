const passport = require('passport');
// Express Route for /auth/google http request.
module.exports = app =>{
    app.get('/auth/google',passport.authenticate('google',{
        scope: ['profile','email']
        })
    );
// Route Handler for google oauth response.
    app.get('/auth/google/callback', passport.authenticate('google'));

    app.get('/api/logout', (req,res) => {
        req.logout();
        res.send(req.user);
    })

    app.get('/api/current_user', (req,res) => {
        res.send(req.user);
    })
};