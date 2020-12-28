<template>
  <div>
    <a-menu v-model="current" mode="horizontal">
      <a-menu-item key="home">
      <router-link to="home">
        <a-icon type="home" />Home
       </router-link>
      </a-menu-item>
      <a-menu-item key="search">
      <router-link to="search">
        <a-icon type="search" />Search
          </router-link>
      </a-menu-item>
    </a-menu>
  </div>
</template>
<script>
export default {
  name: 'Navbar',
  data () {
    return {
      current: ['search']
    }
  }
}
</script>
