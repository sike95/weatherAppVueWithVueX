<template>
  <div>
    <a-modal v-model="visible" v-bind:title="modalData.title" @ok="handleOk" @cancel="handleCancel">
    {{ modalData.content }}
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
      this.$emit('onClosed', true)
      this.visible = false
    },
    handleCancel () {
      this.$emit('onClosed', true)
    }
  }
}
</script>
