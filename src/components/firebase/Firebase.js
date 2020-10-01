import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
  measurementId: process.env.REACT_APP_MEASUREMENT_ID,
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
  electoralCollege = () => this.db.collection('electoralCollege');
  users = () => this.db.collection('users');

  increment = () => firebase.firestore.FieldValue.increment(1);
  decrement = () => firebase.firestore.FieldValue.decrement(-1);

  auth = () => firebase.auth();
  login = async (authProvider) => await this.auth.signInWithRedirect(authProvider);
}

export default Firebase;