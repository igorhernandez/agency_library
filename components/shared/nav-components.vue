<template lang="pug">
  div.nav-components
    div.fixed-comp
      a(href="#itens-col2-model1")
        p itens-col2-model1
      a(href="#itens-col2-model2")
        p itens-col2-model2
      a(href="#itens-col2-model3")
        p itens-col2-model3
      a(href="#itens-col3-model1")
        p itens-col3-model1
      a(href="#itens-col3-model2")
        p itens-col3-model2
      a(href="#itens-col3-model3")
        p itens-col3-model3
      a(href="#itens-col3-model4")
        p itens-col3-model4
      a(href="#itens-col3-partners")
        p itens-col3-partners
      a(href="#itens-col4-model1")
        p itens-col4-model1
      a(href="#itens-col4-model2")
        p itens-col4-model2
      a(href="#itens-col4-model3")
        p itens-col4-model3
      a(href="#itens-col4-partners")
        p itens-col4-partners
      a(href="#section-top")
        p section-top
      a(href="#section-full")
        p section-full
      a(href="#section-right")
        p section-right
      a(href="#section-right-itens")
        p section-right-itens
      a(href="#section-left")
        p section-left
      a(href="#section-left-itens")
        p section-left-itens
      a(href="#section-form")
        p section-form
</template>

<style lang="sass" scoped>
  .nav-components 
    height: 100%
    width: 100%
    background-color: $bgBlue 
    .fixed-comp 
      height: 100vh
      overflow: auto
      position: fixed
    a
      text-decoration: none
      color: $white
    p 
      font-family: $font
      padding: 10px 25px
      font-size: 0.8rem
      &:hover 
        background-color: $hoverBlue
</style>