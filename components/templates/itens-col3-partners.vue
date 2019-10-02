<template lang="pug">
  div.itens
    h2(v-if="hasTitle") Titulo principal da sessao aqui
    p(v-if="hasDesc") Descrição sobre itens que serão exibidos na parte de baixo
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
</template>
<script>
export default {
  props: {
    hasTitle: {
      type: Boolean,
      default: () => {
        return true
      }
    },
    hasDesc: {
      type: Boolean,
      default: () => {
        return true
      }
    },
  }
}
</script>
<style lang="sass" scoped>
  .itens
    font-family: $font
    h2 
      font-size: 2em
      text-align: center
      margin-top: 40px
    p 
      font-size: 1em
      text-align: center
      margin-top: 40px
      margin-bottom: 40px
  .container
    margin: auto
    margin-bottom: 20px
    figure
      display: grid
      grid-gap: 10px
      grid-template-columns: auto auto auto
      @media screen and ( max-width: 585px )
          flex-direction: column
          align-items: center
      img
        width: 100%
        height: auto
</style>