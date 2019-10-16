<template lang="pug">
  div.itens
    itens-services(v-for="service in services" :service="service")
</template>

<script>
export default {
  data(){
    return {
      services: ["UX Design","Front-end","Back-end","App","Vue.JS","Social Media"]
    }
  }
}
</script>

<style lang="sass" scoped>
  .itens
    display: grid
    grid-gap: 20px
    grid-template-columns: auto auto auto 
</style>