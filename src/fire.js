import firebase from 'firebase'
var config = {
  apiKey: 'AIzaSyCUw3vh8EueiUPYAlEwYNXfniaCWnWcHC8',
  authDomain: 'firecast-bd537.firebaseapp.com',
  databaseURL: 'https://firecast-bd537.firebaseio.com',
  projectId: 'firecast-bd537',
  storageBucket: '',
  messagingSenderId: '182459550315'
}
var fire = firebase.initializeApp(config)
export default fire
