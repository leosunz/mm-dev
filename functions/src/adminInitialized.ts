import admin = require('firebase-admin');
admin.initializeApp({
  credential: admin.credential.cert(require('./sa.json')),
  databaseURL: 'https://my-mechanic-dev.firebaseio.com',
});

export const adminInitialized = admin;
