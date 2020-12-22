import { Weather } from '@/interfaces/weather'
import { Location } from '@/interfaces/location'
import axios from 'axios'

const state = {
  weather: {
    main: {
      // eslint-disable-next-line @typescript-eslint/camelcase
      feels_like: ''
    },
    weather: [
      {
        description: ''
      }
    ]
  }
}

const getters = {
  weatherByCity: (state: { weather: Weather }) => state.weather
}

const actions = {
  async fetchWeather ({ commit }: { commit: Function }, location: Location) {
    const url = 'http://api.openweathermap.org/data/2.5/weather?q='
    const apiKey = 'b2dd5d58fc72d4db08704ab8462dc7ef'
    const response = await axios.get(
      `${url}${location.city},${location.code}&APPID=${apiKey}&units=metric`
    )

    console.log(response)
    commit('setWeather', response.data)
  }
}

const mutations = {
  setWeather: (state: { weather: Weather }, weather: Weather) =>
    (state.weather = weather)
}

export default {
  state,
  getters,
  actions,
  mutations
}
