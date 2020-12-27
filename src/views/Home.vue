<template>
  <div id="secure" class="container">
    <NotificationPopUp
      ref="NotificationPopUp"
      v-bind:modalData="modalData"
    ></NotificationPopUp>
    <div class="infomation">
      <h1>City : {{ weatherByCity.name }}</h1>
      <h1>Weather : {{ weatherByCity.weather[0].description }}</h1>
      <h1>Temp : {{ weatherByCity.main.temp }}</h1>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import NotificationPopUp from '../components/NotificationPopUp'

export default {
  name: 'Weather',
  computed: {
    ...mapGetters(['weatherByCity'])
  },
  components: {
    NotificationPopUp
  },
  data () {
    return {
      modal: false,
      modalData: {
        title: '',
        content: ''
      }
    }
  },
  mounted () {
    if (this.weatherByCity.main.feels_like === '') {
      this.modalData.title = 'hello'
      this.modalData.content = 'world'
      this.$refs.NotificationPopUp.showModal()

      this.$router.push('/search')
    }
  }
}
</script>

<style></style>
