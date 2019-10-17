<template lang="pug">
  footer.footer
    div.head-footer
      div.social
      div.call
        h2 Let's Talk?
      div.action
</template>

<style lang="sass" scoped>
  .footer 
    background-color: $gray
  .head-footer 
    display: grid
    grid-template-columns: auto auto auto
    grid-gap: 20px
    justify-content: center
    align-content: center
    height: 200px
    font-family: $font
    h2 
      font-size: 2.4em
    div 
      background-color: $black
</style>