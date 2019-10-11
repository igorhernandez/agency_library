<template lang="pug">
  div.body
    nuxt-link(to="/components") Components
    nuxt-link(to="/elements") Elements
    nuxt-link(to="/layout/layout-01") Layout-01
</template>

<script>
export default {
  head() {
    return{
      title: 'Development Library | VueJS'
    }
  }
}
</script>

<style lang="sass" scoped>
  .body 
    display: grid 
    grid-template-columns: auto auto auto
    grid-gap: 10px
    justify-content: center
    align-items: center
    font-family: $font 
    font-size: 1em
    a
      background-color: $bgBlue
      padding: 30px 50px
      border-radius: 5px
      color: $white
      text-decoration: none
      margin-top: 10px
      &:hover 
          background-color: $hoverBlue
          cursor: pointer
          transition: 0.9s
</style>
