<template lang="pug">
  section.body
    section-left-itens(
      :images="require('../assets/img/vue.png')"
      title="Comprando Symma você se torna parte da Etherdam!"
      description="A Symma trará o primeiro banco mundial de ether, 50% de seu investimento será revertido para impulsionar a usabilidade da moeda, possibilitando futuramente até mesmo saques e investimentos em start-ups!"
      buttonText="Saiba mais"
      linkSaiba="#"
      textAlign="inherit"
      alignItems="inherit"
    )
    section-right-itens(
      :images="require('../assets/img/vue.png')"
      title="Comprando Symma você se torna parte da Etherdam!"
      description="A Symma trará o primeiro banco mundial de ether, 50% de seu investimento será revertido para impulsionar a usabilidade da moeda, possibilitando futuramente até mesmo saques e investimentos em start-ups!"
      buttonText="Saiba mais"
      linkSaiba="#"
      textAlign="inherit"
      alignItems="inherit"
    )
    section-form-full(
      :images="require('../assets/img/vue.png')"
      title="Comprando Symma você se torna parte da Etherdam!"
      :fields="[{ value: '', valid: true, label: 'Teste do form', type: 'text', id: 'txt_teste' }]"
      buttonText="Enviar"
    )
    itens-col3-model2(:hasTitle="false" :hasDesc="false")
    itens-col3-model2(:hasTitle="false" :hasDesc="false")
</template>
