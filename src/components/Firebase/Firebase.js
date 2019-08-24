import app from 'firebase/app';
import 'firebase/auth';

class Firebase {
    constructor() {
        app.initializeApp(this.getConfig());
        this.auth = app.auth();
    }
    doCreateUserWithEmailAndPassword = (email, password) => {
        this.auth.createUserWithEmailAndPassword(email, password); // priomise
    }
    doSingInWithEmailAndPassword = (email, password) => {
        this.auth.signInWithEmailAndPassword(email, password); // promise
    }
    doSingOut = () => this.auth.signOut();
    doPasswordReset = email => this.auth.sendPasswordResetEmail(email);
    getConfig() {
        //TODO see ways for hide this variables into env file
        // https://www.robinwieruch.de/complete-firebase-authentication-react-tutorial/
        // ?? https://firebase.google.com/docs/functions/config-env
        return {
            apiKey: "AIzaSyAkQF5KPZE6eC_gv4uionqEMnHxFVOz_Z8", //process.env.REACT_APP_API_KEY
            authDomain: "eventos-react.firebaseapp.com", //process.env.REACT_APP_AUTH_DOMAIN
            databaseURL: "https://eventos-react.firebaseio.com", //process.env.REACT_APP_DATABASE_URL
            projectId: "eventos-react", //process.env.REACT_APP_PROJECT_ID
            storageBucket:  "", //process.env.REACT_APP_STORAGE_BUCKET
            messagingSenderId: "100043971091", //process.env.REACT_APP_MESSAGING_SENDERID
            appId: "1:100043971091:web:4e8a3209a4580b36" //process.env.REACT_APP_APP_ID
        };
    }
}

export default new Firebase();