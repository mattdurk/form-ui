<template lang='html'>
<div>
  <b-button v-b-modal.modal-1>{{ isOpen }}</b-button>

  <b-modal id="info" title="BootstrapVue" v-model="isOpen">
    <p class="my-4">Hello from modal!</p>
  </b-modal>
</div>
</template>

<script lang='js'>

export default {
    name: 'modal',
    props:{
        isOpen:Boolean
    },
    methods:{
        toggleModal(){
            this.$emit('myEvent')
        }
    }  
}
</script>

<style scoped lang='scss'>
</style>
