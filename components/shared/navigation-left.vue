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
    display: flex
    background-color: $white
    height: 100vh
    top: 0
    padding: 50px
    font-family: $font
    .content-menu
      left: 0
      position: fixed
      a 
        color: $black
        text-decoration: none
      ul 
        list-style: none
        li 
          padding: 20px 10px
          &:hover
            color: $blue
            transition: 0.4s
</style>