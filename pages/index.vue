<template lang="pug">
  div.body
    div.nav
      nuxt-link(to="/components") Components
      nuxt-link(to="/elements") Elements
      nuxt-link(to="/layout/layout-01") Layout-01
      nuxt-link(to="/layout/layout-02") Layout-02
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
    display: flex
    align-content: center
    justify-content: center
    font-family: $font 
    font-size: 1em
    background-color: $bgGray
    height: 100vh
    .nav 
      display: grid 
      grid-template-columns: auto auto auto
      grid-gap: 10px
      justify-content: center
      align-content: center
    a
      background-color: $darkRed
      padding: 30px 50px
      border-radius: 5px
      color: $white
      text-decoration: none
      margin-top: 10px
      &:hover 
          background-color: $hoverRed
          cursor: pointer
          transition: 0.9s
</style>
