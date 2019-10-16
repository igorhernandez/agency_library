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
    background-color: $gray
    color: $white
    padding: 10px 20px
    display: grid
    align-items: center
    grid-template-columns: auto 20px
    transition: 0.8s all
    &:hover 
      background-color: $hoverRed
      cursor: pointer
    h3 
      font-family: $font
</style>