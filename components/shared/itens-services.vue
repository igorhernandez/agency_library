<template lang="pug">
  div.contain
    h3 {{service}}
    font-awesome-icon.fontawesome(icon="arrow-right")
</template>

<script>
export default {
  props:{
    service: {
      type: String,
      default: () => {
        return 'Service Here'
      }
    }
  }
}
</script>

<style lang="sass" scoped>
  .contain 
    background-color: $bgGray
    color: $white
    padding: 20px
    display: grid
    align-items: center
    grid-template-columns: auto 20px
    &:hover 
      background-color: $hoverRed
      transition: 0.8s
      cursor: pointer
</style>