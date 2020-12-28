<template>
  <div>
    <a-form
      :form="form"
      :label-col="{ span: 6 }"
      :wrapper-col="{ span: 6 }"
      @submit="handleSubmit"
    >
      <a-form-item label="City">
        <a-input
          v-decorator="[
            'city',
            { rules: [{ required: true, message: 'Please input your city!' }] }
          ]"
        />
      </a-form-item>

      <a-form-item label="Country Code">
        <a-input
          v-decorator="[
            'code',
            {
              rules: [
                { required: true, message: 'Please input your country code!' }
              ]
            }
          ]"
        />
      </a-form-item>
      <a-form-item :wrapper-col="{ span: 12, offset: 5 }">
        <a-button type="primary" html-type="submit">
          Submit
        </a-button>
      </a-form-item>
    </a-form>
    <img
      src="https://static.thenounproject.com/png/198234-200.png"
      alt=""
      sizes=""
      srcset=""
      style="float: right; padding-right: 10%"
    />
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  data () {
    return {
      formLayout: 'horizontal',
      form: this.$form.createForm(this, { name: 'coordinated' }),
      location: {
        city: '',
        code: ''
      }
    }
  },
  methods: {
    ...mapActions(['fetchWeather']),
    handleSubmit (e) {
      e.preventDefault()
      this.form.validateFields((err, values) => {
        if (!err) {
          this.location.city = values.city
          this.location.code = values.code
          this.searchForLocationWeatherData()
        }
      })
    },
    searchForLocationWeatherData: function () {
      if (this.location) {
        this.$store
          .dispatch('fetchWeather', this.location)
          .then(() => {
            this.$router.push('/home')
          })
          .catch(error => {
            this.$error({
              title: 'Invalid country/city combination',
              content: 'Error trying to fetch weather please try again!'
            })
            console.log(error)
          })
      }
    }
  }
}
</script>

<style></style>
