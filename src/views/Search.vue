<template>
  <div id="secure" class="form-group">
    <label for="city">City:</label>
    <input
      type="text"
      name="city"
      class="form-control"
      v-model="location.city"
    />

    <label for="code">Code:</label>
    <input
      type="text"
      name="code"
      class="form-control"
      v-model="location.code"
    />
    <p>eg: GB, ZA, US</p>

    <button class="btn btn-primary" v-on:click="searchForLocationWeatherData">
      Submit
    </button>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  data () {
    return {
      location: {
        city: '',
        code: ''
      }
    }
  },
  methods: {
    ...mapActions(['fetchWeather']),
    searchForLocationWeatherData: function () {
      if (this.location) {
        this.$store
          .dispatch('fetchWeather', this.location)
          .then(() => {
            this.$router.push('/home')
          })
          .catch(error => {
            alert('City not found please try again ')
            console.log(error)
          })
      }
    }
  }
}
</script>

<style></style>
