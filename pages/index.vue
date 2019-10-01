<template lang="pug">
  section.body
    section-left-itens(
      :images="require('../assets/img/vue.png')"
      title="Comprando Symma você se torna parte da Etherdam!"
      describe="A Symma trará o primeiro banco mundial de ether, 50% de seu investimento será revertido para impulsionar a usabilidade da moeda, possibilitando futuramente até mesmo saques e investimentos em start-ups!"
      buttonText="Saiba mais"
      linkSaiba="#"
    )
    section-right-itens(
      :images="require('../assets/img/vue.png')"
      title="Comprando Symma você se torna parte da Etherdam!"
      describe="A Symma trará o primeiro banco mundial de ether, 50% de seu investimento será revertido para impulsionar a usabilidade da moeda, possibilitando futuramente até mesmo saques e investimentos em start-ups!"
      buttonText="Saiba mais"
      linkSaiba="#"
    )
    section-form(
      :images="require('../assets/img/vue.png')"
      title="Comprando Symma você se torna parte da Etherdam!"
      :fields="[{ value: '', valid: true, label: 'Teste do form', type: 'text', id: 'txt_teste' }]"
      buttonText="Enviar"
    )
    itens-col3-partners
    itens-col4-partners
</template>
<style lang="sass">
  .page
      margin-top: 100px
</style>
