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
      a(href="#itens-col4-model1")
        p itens-col4-model1
      a(href="#itens-col4-model2")
        p itens-col4-model2
      a(href="#itens-col4-model3")
        p itens-col4-model3
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
      a(href="#section-form-full")
        p section-form-full
      a(href="#section-form-left")
        p section-form-left
      a(href="#section-form-right")
        p section-form-right
      a(href="#slider-01")
        p slider-01
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