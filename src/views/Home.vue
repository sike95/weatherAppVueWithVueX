<template >
  <div id="secure" class="container" >
              <NotificationPopUp
      ref="NotificationPopUp"
      @onClosed="onModalClosed"
      v-bind:modalData="modalData"
    ></NotificationPopUp>
    <div class="infomation" v-if="weatherByCity.name">

      <h1>City : {{ weatherByCity.name }}</h1>
      <h1>Weather : {{ weatherByCity.weather[0].description }}</h1>
      <h1>Temp : {{ weatherByCity.main.temp }}</h1>
      <img  src="https://cdn2.iconfinder.com/data/icons/crystalproject/crystal_project_256x256/apps/kweather.png" alt="" sizes="" srcset="">
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
