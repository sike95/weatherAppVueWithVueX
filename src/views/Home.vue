<template>
  <div id="secure" class="container">
    <div class="infomation">
      <h1>City : {{ weatherByCity.name }}</h1>
      <h1>Weather : {{ weatherByCity.weather[0].description }}</h1>
      <h1>Temp : {{ weatherByCity.main.temp }}</h1>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Weather',
  computed: {
    ...mapGetters(['weatherByCity'])
  },
  mounted () {
    if (this.weatherByCity.main.feels_like === '') {
      alert('Please enter a location')
      this.$router.push('/search')
    }
  }
}
</script>

<style></style>
