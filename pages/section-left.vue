<template lang="pug">
  div
    section-form-right(
      :images="require('../assets/img/vue.png')"
      title="Comprando Symma você se torna parte da Etherdam!"
      :fields="[{ value: '', valid: true, label: 'Teste do form', type: 'text', id: 'txt_teste' }]"
      buttonText="Enviar"
      )
    div.full
      img(:src="require('../assets/img/vue.png')")
      section.itens
        itens-col2-model1(:hasTitle="false" :hasDesc="false")
        itens-col2-model1(:hasTitle="false" :hasDesc="false")
        itens-col2-model1(:hasTitle="false" :hasDesc="false")
</template>
<style lang="sass" scoped>
.full
  display: grid
  grid: auto / 500px auto
  .itens 
    display: flex
    flex-direction: column
</style>