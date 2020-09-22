import app from 'firebase/app';
import firebase from 'firebase';
import 'firebase/database';

const config = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
};

class Firebase {
  constructor() {
    firebase.initializeApp(config);
    this.db = firebase.firestore();
  }

  parties = () => this.db.collection('parties');
  candidates = () => this.db.collection('candidates');
  states = () => this.db.collection('states');
  total = () => this.db.collection('total');
  electoralCollege = () => this.db.collection('electoralCollege')

  increment = () => firebase.firestore.FieldValue.increment(1);
  decrement = () => firebase.firestore.FieldValue.decrement(-1);
}

// class Firebase {
//   constructor() {
//     app.initializeApp(config);
//     // this.db = app.database();
//     this.db = app.firestore();
//   }

//   votes = () => this.db.ref('votes');
// }

export default Firebase;