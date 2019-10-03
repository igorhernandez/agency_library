<template lang="pug">
  div.menu-left
    div.content-menu
      ul
        a(href="#")
          li Componentes
        a(href="#") 
          li Layouts
</template>

<style lang="sass" scoped>
  .menu-left 
    background-color: $white
    height: 100vh
    top: 0
    font-family: $font
    font-size: 0.7rem
    .content-menu
      left: 0
      position: fixed
      a 
        color: $black
        text-decoration: none
      ul 
        list-style: none
        padding: 10px 20px
        li 
          padding: 10px 0
          &:hover
            color: $blue
            transition: 0.4s
</style>