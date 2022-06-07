import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { initializeApp } from 'firebase/app'

const firebaseConfig = {
  apiKey: 'AIzaSyAeceXieSIQErTCGd5lEuDyYOVX1Se_DdQ',
  authDomain: 'auth-41d75.firebaseapp.com',
  projectId: 'auth-41d75',
  storageBucket: 'auth-41d75.appspot.com',
  messagingSenderId: '433103566584',
  appId: '1:433103566584:web:b95087ff08a68487f22d0d'
}

initializeApp(firebaseConfig)

createApp(App).use(router).mount('#app')
