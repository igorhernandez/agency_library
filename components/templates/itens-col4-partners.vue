<template lang="pug">
  div.container
    figure
      img(
        :src="require('../../assets/img/vue.png')"
      )
      img(
        :src="require('../../assets/img/vue.png')"
      )
      img(
        :src="require('../../assets/img/vue.png')"
      )
      img(
        :src="require('../../assets/img/vue.png')"
      )
</template>

<style lang="sass" scoped>
  .container
    width: 700px
    margin: auto
    margin-bottom: 20px
    figure
      display: grid
      grid-gap: 10px
      grid-template-columns: auto auto auto auto
      @media screen and ( max-width: 585px )
          flex-direction: column
          align-items: center
      img
        width: 100%
        height: auto
</style>