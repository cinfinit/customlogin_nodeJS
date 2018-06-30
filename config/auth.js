module.exports = {
  facebookAuth: {
   clientID: process.env.fbClientID,
   clientSecret: process.env.fbClientSecret,
    callbackURL: 'https://somethingmongo.herokuapp.com/auth/facebook/callback',
  },
  twitterAuth: {
    consumerKey: process.env.twitterClientID,
    consumerSecret: process.env.twitterClientSecret,
    callbackURL: 'https://somethingmongo.herokuapp.com/auth/twitter/callback',
  },
  googleAuth: {
    clientID: process.env.googleClientID,
    clientSecret: process.env.googleClientSecret,
    callbackURL: 'https://somethingmongo.herokuapp.com/auth/google/callback',
  },
};
