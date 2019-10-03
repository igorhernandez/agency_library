<template lang="pug">
  div.itens
    h2(v-if="hasTitle") Titulo principal da sessao aqui
    p(v-if="hasDesc") Descrição sobre itens que serão exibidos na parte de baixo
    div.division 
      card-info2(
        :images="require('../../assets/img/vue.png')"
        description="Aqui é onde irá a descricao"
        :hasButton="false"
        :textAlign="textAlign"
        :alignItems="alignItems"
      )
      card-info2(
        :images="require('../../assets/img/vue.png')"
        description="Aqui é onde irá a descricao"
        :hasButton="false"
        :textAlign="textAlign"
        :alignItems="alignItems"
      )
      card-info2(
        :images="require('../../assets/img/vue.png')"
        description="Aqui é onde irá a descricao"
        :hasButton="false"
        :textAlign="textAlign"
        :alignItems="alignItems"
      )
      card-info2(
        :images="require('../../assets/img/vue.png')"
        description="Aqui é onde irá a descricao"
        :hasButton="false"
        :textAlign="textAlign"
        :alignItems="alignItems"
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
    textAlign: {
      type: String,
      default: () => {
        return 'inherit'
      }
    },
    alignItems: {
      type: String,
      default: () => {
        return 'inherit'
      }
    }
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
  .division
    margin-top: 40px
    margin-bottom: 40px
    display: grid
    grid-gap: 10px
    grid-template-columns: auto auto auto auto
    @media screen and ( max-width: 585px )
        flex-direction: column
        align-items: center
</style>