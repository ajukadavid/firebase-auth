<template>
  <router-view/>
</template>

<script>
import { onBeforeMount } from "vue";
import { useRoute, useRouter } from 'vue-router'
import firebase from 'firebase/app'
export default {
  setup () {
    const router = useRouter()
    const route = useRoute()
    onBeforeMount(() => {
      firebase.auth().onAuthStateChanged((user) => {
        if(!user) {
          router.replace('/login')
        } else if (route.path === '/login' || route.path === 'register') {

        }
      })
    })
  }
}
</script>

<style lang="scss">
body {
  background: #2c3e50;
  color: #fff;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
a {
  color: inherit;
}
</style>
