<template lang="pug">
  div.body
    section#full
      section-full(:images="require('../assets/img/guide/banner.jpg')")
    section#itens
      itens-col3-model2
    section#info-right 
      section-right(
        :images="require('../assets/img/vue.png')"
        title="Comprando Symma você se torna parte da Etherdam!"
        describe="A Symma trará o primeiro banco mundial de ether, 50% de seu investimento será revertido para impulsionar a usabilidade da moeda, possibilitando futuramente até mesmo saques e investimentos em start-ups!"
        buttonText="Saiba mais"
        linkSaiba="#"
      )
    section#info-left
      section-left(
        :images="require('../assets/img/vue.png')"
        title="Comprando Symma você se torna parte da Etherdam!"
        describe="A Symma trará o primeiro banco mundial de ether, 50% de seu investimento será revertido para impulsionar a usabilidade da moeda, possibilitando futuramente até mesmo saques e investimentos em start-ups!"
        buttonText="Saiba mais"
        linkSaiba="#"
      )
    section#info-right
      section-right(
        :images="require('../assets/img/vue.png')"
        title="Comprando Symma você se torna parte da Etherdam!"
        describe="A Symma trará o primeiro banco mundial de ether, 50% de seu investimento será revertido para impulsionar a usabilidade da moeda, possibilitando futuramente até mesmo saques e investimentos em start-ups!"
        buttonText="Saiba mais"
        linkSaiba="#"
      )
    section#info-left-itens
      section-left-itens(
        :images="require('../assets/img/vue.png')"
        title="Comprando Symma você se torna parte da Etherdam!"
        describe="A Symma trará o primeiro banco mundial de ether, 50% de seu investimento será revertido para impulsionar a usabilidade da moeda, possibilitando futuramente até mesmo saques e investimentos em start-ups!"
        buttonText="Saiba mais"
        linkSaiba="#"
      )
    section#contact 
     section-form-full(
          :images="require('../assets/img/vue.png')"
          title="Comprando Symma você se torna parte da Etherdam!"
          :fields="[{ value: '', valid: true, label: 'Teste do form', type: 'text', id: 'txt_teste' }]"
          buttonText="Enviar"
        )
    footer-01
</template>

<script>
export default {
  head() {
    return{
      title: 'Development Library | VueJS'
    }
  }
}
</script>

<style lang="sass" scoped>
  section 
    padding-bottom: 120px
</style>
