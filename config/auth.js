module.exports = {
  facebookAuth: {
   clientID: process.env.fbClientID,
   clientSecret: process.env.fbClientSecret,
    callbackURL: 'http://localhost:3000/auth/facebook/callback',
  },
  twitterAuth: {
    consumerKey: process.env.twitterClientID,
    consumerSecret: process.env.twitterClientSecret,
    callbackURL: 'http://localhost:3000/auth/twitter/callback',
  },
  googleAuth: {
    clientID: process.env.googleClientID,
    clientSecret: process.env.googleClientSecret,
    callbackURL: 'http://localhost:3000/auth/google/callback',
  },
};
