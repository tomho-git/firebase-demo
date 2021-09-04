import Vue from 'vue'
import App from './App.vue'
import router from './router'
import firebase from "firebase/app";
import store from './store'



Vue.config.productionTip = false


const firebaseConfig = {
    apiKey: "AIzaSyCop08ZXjUuY02Ywm37nrNd0hZJaKMVrOA",
    authDomain: "testing-tom-8386a.firebaseapp.com",
    projectId: "testing-tom-8386a",
    storageBucket: "testing-tom-8386a.appspot.com",
    messagingSenderId: "458874673450",
    appId: "1:458874673450:web:db85766b0223b93511a653",
    measurementId: "G-RLYEHRBLS9"
}


firebase.initializeApp(firebaseConfig);
firebase.auth().onAuthStateChanged(user => { store.dispatch("fetchUser", user) });



new Vue({
    store,
    render: h => h(App),
    router
}).$mount('#app')