<template lang="pug">
  footer 
    div.content-footer
      div.rights
        h4 2019 © Agency All rights reserved
      div.terms
        h4 Terms of use
        h4 Privacy Policy
        h4 Cookie Policy
</template>

<style lang="sass" scoped>
  footer 
    background-color: $black
    font-family: $font
    .content-footer
      height: 50px 
      display: flex
      align-items: center
      justify-content: space-between
      h4 
        color: $white
        font-size: .7em
        font-weight: normal
      .terms 
        display: grid
        grid-template-columns: auto auto auto
        justify-content: center
        align-items: center
        grid-gap: 20px
</style>