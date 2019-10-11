<template lang="pug">
  div.nav-elements
    div.fixed-comp
      a(href="#tooltip")
        p tooltip
      a(href="#loader-01")
        p loader-01
      a(href="#loader-02")
        p loader-02
      a(href="#loader-03")
        p loader-03
      a(href="#loader-04")
        p loader-04
      a(href="#loader-05")
        p loader-05
      a(href="#loader-06")
        p loader-06
      a(href="#loader-07")
        p loader-07
      a(href="#loader-08")
        p loader-08
      a(href="#loader-09")
        p loader-09
      
</template>

<style lang="sass" scoped>
  .nav-elements 
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