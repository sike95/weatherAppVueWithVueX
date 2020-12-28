<template>
  <div id="app">
    <div v-if="authenticated">
      <h1>Welcome to our weather app !</h1>
      <hr />
      <Navbar></Navbar>
      <br/>
      <br/>
    </div>
    <router-view @authenticated="setAuthenticated" />
    <!-- <router-view></router-view> -->
  </div>
</template>

<script>
import Navbar from './components/Navbar'
export default {
  name: 'App',
  components: {
    Navbar
  },
  data () {
    return {
      authenticated: false,
      mockAccount: {
        username: '2077',
        password: 'password'
      }
    }
  },
  mounted () {
    if (!this.authenticated) {
      this.$router.replace({ name: 'login' })
    }
  },
  methods: {
    setAuthenticated (status) {
      this.authenticated = status
    },
    logout () {
      this.authenticated = false
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
