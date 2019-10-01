<template lang="pug">
  div.itens
    h2 Titulo principal da sessao aqui
    p Descrição sobre itens que serão exibidos na parte de baixo
    div.division 
      card-simple(
        :images="require('../../assets/img/vue.png')"
        describe="Aqui é onde irá a descricao"
      )
      card-simple(
        :images="require('../../assets/img/vue.png')"
        describe="Aqui é onde irá a descricao"
      )
      card-simple(
        :images="require('../../assets/img/vue.png')"
        describe="Aqui é onde irá a descricao"
      )
</template>

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
    display: grid
    grid-gap: 10px
    grid-template-columns: auto auto auto
    @media screen and ( max-width: 585px )
        flex-direction: column
        align-items: center
</style>