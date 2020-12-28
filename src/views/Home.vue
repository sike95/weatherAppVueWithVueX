<template>
  <div id="secure" class="container">
    <div class="infomation">
          <NotificationPopUp
      ref="NotificationPopUp"
      @onClosed="onModalClosed"
      v-bind:modalData="modalData"
    ></NotificationPopUp>
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
      this.modalData.title = 'Unknown City:'
      this.modalData.content = 'Please Enter a valid city and country code.'
      this.$refs.NotificationPopUp.showModal()
    }
  },
  methods: {
    onModalClosed ($event) {
      this.$router.push('/search')
    }
  }
}
</script>

<style></style>
