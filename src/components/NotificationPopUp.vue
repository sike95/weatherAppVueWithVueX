<template>
  <div>
    <a-modal v-model="visible" title="Basic Modal" @ok="handleOk">
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
      {{visible}}
    </a-modal>
  </div>
</template>
<script>
export default {
  name: 'NotificationPopUp',
  props: {
    modalData: {}
  },
  data () {
    return {
      visible: false
    }
  },
  methods: {
    showModal () {
      this.visible = true
    },
    handleOk (e) {
      console.log(e)
      this.visible = false
    }
  }
}
</script>
