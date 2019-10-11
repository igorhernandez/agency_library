<template lang="pug">
  div.components
    div.nav-comp
      nav-elements
    div.content-comp 
      section.box-contain#tooltip
        tooltip( 
          text="Tooltip"
          :direction="'top'" 
          :title="'Escreva aqui o que você quiser!'" 
          :animation="'slide-fade'"
        )
      section.box-contain#loader-01
        loader-01
      section.box-contain#loader-02
        loader-02
      section.box-contain#loader-03
        loader-03
      section.box-contain#loader-04
        loader-04
      section.box-contain#loader-05
        loader-05
      section.box-contain#loader-06
        loader-06
      section.box-contain#loader-07
        loader-07
      section.box-contain#loader-08
        loader-08
</template>

<style lang="sass" scoped>
  .components 
    display: grid
    background-color: $gray
    grid-template-columns: 175px auto
    font-family: $font
    .nav-comp 
      margin-right: 1px
    .division
      margin-bottom: 50px
      padding-bottom: 100px
      border-bottom: 1px solid $grayDark
      h3 
        padding-left: 40px
    .box-contain 
      display: flex
      justify-content: center 
      align-items: center
      height: 200px
      border-bottom: 1px solid $grayDark
</style>