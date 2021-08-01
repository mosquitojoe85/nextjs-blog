import App from 'next/app';
import firebase from "firebase/app";
import "firebase/auth";
import { wrapper } from '../redux';
import '../styles/global.css';

const firebaseConfig = {
  // apiKey: "YOUR_API_KEY",
  // authDomain: "your-app.firebaseapp.com",
  // databaseURL: "https://your-app.firebaseio.com",
  // storageBucket: "your-app.appspot.com",

  apiKey: "AIzaSyAO__NjroNu0q-QE_cND7lwpJZlkUe_bPk",
  authDomain: "try-firebaseui.firebaseapp.com",
  projectId: "try-firebaseui",
  storageBucket: "try-firebaseui.appspot.com",
  messagingSenderId: "106070164440",
  appId: "1:106070164440:web:2c447d4de5c2c956ee68ad",
  measurementId: "G-DJCBM1Y2S1"
};

class MyApp extends App {
  componentDidMount() {
    firebase.initializeApp(firebaseConfig);
  }

  render() {
    const { Component, pageProps } = this.props;
    return (
      <Component {...pageProps} />
    );
  }
}

export default wrapper.withRedux(MyApp);
