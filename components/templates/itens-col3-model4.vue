<template lang="pug">
  div.itens
    div.division 
      card-info4(
        :images="require('../../assets/img/vue.png')"
        description="is simply dummy text of the printing and typesetting industry."
        :hasButton="false"
        :textAlign="textAlign"
        :alignItems="alignItems"
      )
      card-info4(
        :images="require('../../assets/img/vue.png')"
        description="is simply dummy text of the printing and typesetting industry."
        :hasButton="false"
        :textAlign="textAlign"
        :alignItems="alignItems"
      )
      card-info4(
        :images="require('../../assets/img/vue.png')"
        description="is simply dummy text of the printing and typesetting industry."
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
    grid-gap: 20px
    grid-template-columns: auto auto auto
    @media screen and ( max-width: 585px )
        flex-direction: column
        align-items: center
</style>