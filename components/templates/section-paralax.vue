<template lang="pug">
  div.itens(:style="bgImage ? `background-image: url('${bgImage}')` : '' ")
    h2(v-if="hasTitle") Titulo principal da sessao aqui
    p(v-if="hasDesc") Descrição sobre itens que serão exibidos na parte de baixo
    div.division
      card-info3(
        :images="require('../../assets/img/vue.png')"
        description="Aqui é onde irá a descricao"
        :hasButton="false"
        :hasImage="false"
        :hasTitle="false"
        :textAlign="textAlign"
        :alignItems="alignItems"
      )
      card-info3(
        :images="require('../../assets/img/vue.png')"
        description="Aqui é onde irá a descricao"
        :hasButton="false"
        :hasImage="false"
        :hasTitle="false"
        :textAlign="textAlign"
        :alignItems="alignItems"
      )
      card-info3(
        :images="require('../../assets/img/vue.png')"
        description="Aqui é onde irá a descricao"
        :hasButton="false"
        :hasImage="false"
        :hasTitle="false"
        :textAlign="textAlign"
        :alignItems="alignItems"
      )
      card-info3(
        :images="require('../../assets/img/vue.png')"
        description="Aqui é onde irá a descricao"
        :hasButton="false"
        :hasImage="false"
        :hasTitle="false"
        :textAlign="textAlign"
        :alignItems="alignItems"
      )
      card-info3(
        :images="require('../../assets/img/vue.png')"
        description="Aqui é onde irá a descricao"
        :hasButton="false"
        :hasImage="false"
        :hasTitle="false"
        :textAlign="textAlign"
        :alignItems="alignItems"
      )
      card-info3(
        :images="require('../../assets/img/vue.png')"
        description="Aqui é onde irá a descricao"
        :hasButton="false"
        :hasImage="false"
        :hasTitle="false"
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
    },
    bgImage: {
      type: String,
      default: () => {
        return require('../../assets/img/vue.png')
      }
    }
  }
}
</script>
<style lang="sass" scoped>
  .itens
    background-attachment: fixed
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
    padding: 60px 160px
    margin-top: 40px
    margin-bottom: 40px
    display: grid
    grid-gap: 10px
    grid-template-columns: repeat(6,auto)
    @media screen and ( max-width: 585px )
        flex-direction: column
        align-items: center
</style>