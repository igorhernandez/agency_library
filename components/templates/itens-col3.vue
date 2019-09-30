<template lang="pug">
  div.itens
    h2 Titulo principal da sessao aqui
    div.division 
      card-info(
        :images="require('../../assets/img/vue.png')"
        describe="Aqui é onde irá a descricao"
      )
      card-info(
        :images="require('../../assets/img/vue.png')"
        describe="Aqui é onde irá a descricao"
      )
      card-info(
        :images="require('../../assets/img/vue.png')"
        describe="Aqui é onde irá a descricao"
      )
</template>

<style lang="sass">
  .itens
    font-family: $font
    padding: 50px 10px
    h2 
      font-size: 2em
      text-align: center
  .division 
    padding: 50px
    display: grid
    grid-gap: 10px
    grid-template-columns: auto auto auto
    @media screen and ( max-width: 585px )
        flex-direction: column
        align-items: center
</style>