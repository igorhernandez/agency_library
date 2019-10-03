<template lang="pug">
  div.components
    //- NAVEGACAO COMPONENTES
    div.nav-comp
      nav-components
    div.content-comp 
      div.division#itens-col2-model1 
        h3 itens-col2-model1
        itens-col2-model1
      div.division#itens-col2-model2 
        h3 itens-col2-model2
        itens-col2-model2
      div.division#itens-col3-model1 
        h3 itens-col3-model1
        itens-col3-model1
      div.division#itens-col3-model2 
        h3 itens-col3-model2
        itens-col3-model2
      div.division#itens-col3-model3 
        h3 itens-col3-model3
        itens-col3-model3
      div.division#itens-col4-model1 
        h3 itens-col4-model1
        itens-col4-model1
      div.division#itens-col4-model2 
        h3 itens-col4-model2
        itens-col4-model2
      div.division#section-top 
        h3 Section-Top
        section-top(:images="require('../assets/img/vue.png')")
      div.division#section-full 
        h3 Section-Full
        section-full(:images="require('../assets/img/vue.png')")
      div.division#section-right 
        h3 Section-Right
        section-right(
          :images="require('../assets/img/vue.png')"
          title="Comprando Symma você se torna parte da Etherdam!"
          describe="A Symma trará o primeiro banco mundial de ether, 50% de seu investimento será revertido para impulsionar a usabilidade da moeda, possibilitando futuramente até mesmo saques e investimentos em start-ups!"
          buttonText="Saiba mais"
          linkSaiba="#"
        )
      div.division#section-right-itens
        h3 Section-Right-Itens
        section-right-itens(
          :images="require('../assets/img/vue.png')"
          title="Comprando Symma você se torna parte da Etherdam!"
          describe="A Symma trará o primeiro banco mundial de ether, 50% de seu investimento será revertido para impulsionar a usabilidade da moeda, possibilitando futuramente até mesmo saques e investimentos em start-ups!"
          buttonText="Saiba mais"
          linkSaiba="#"
        )
      div.division#section-left
        h3 Section-Left
        section-left(
          :images="require('../assets/img/vue.png')"
          title="Comprando Symma você se torna parte da Etherdam!"
          describe="A Symma trará o primeiro banco mundial de ether, 50% de seu investimento será revertido para impulsionar a usabilidade da moeda, possibilitando futuramente até mesmo saques e investimentos em start-ups!"
          buttonText="Saiba mais"
          linkSaiba="#"
        )
      div.division#section-left-itens
        h3 Section-Left-Itens
        section-left-itens(
          :images="require('../assets/img/vue.png')"
          title="Comprando Symma você se torna parte da Etherdam!"
          describe="A Symma trará o primeiro banco mundial de ether, 50% de seu investimento será revertido para impulsionar a usabilidade da moeda, possibilitando futuramente até mesmo saques e investimentos em start-ups!"
          buttonText="Saiba mais"
          linkSaiba="#"
        )
      div.division#section-form-full
        h3 Section-Form-Full
        section-form-full(
          :images="require('../assets/img/vue.png')"
          title="Comprando Symma você se torna parte da Etherdam!"
          :fields="[{ value: '', valid: true, label: 'Teste do form', type: 'text', id: 'txt_teste' }]"
          buttonText="Enviar"
        )
      div.division#section-form-left
        h3 Section-Form-left
        section-form-left(
          :images="require('../assets/img/vue.png')"
          title="Comprando Symma você se torna parte da Etherdam!"
          :fields="[{ value: '', valid: true, label: 'Teste do form', type: 'text', id: 'txt_teste' }]"
          buttonText="Enviar"
        )
      div.division#section-form-right
        h3 Section-Form-right
        section-form-right(
          :images="require('../assets/img/vue.png')"
          title="Comprando Symma você se torna parte da Etherdam!"
          :fields="[{ value: '', valid: true, label: 'Teste do form', type: 'text', id: 'txt_teste' }]"
          buttonText="Enviar"
        )
      
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
</style>