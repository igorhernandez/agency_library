<template lang="pug">
  div.all
    section-form(
      :images="require('../assets/img/vue.png')"
      title="Comprando Symma você se torna parte da Etherdam!"
      :fields="[{ value: '', valid: true, label: 'Teste do form', type: 'text', id: 'txt_teste' }]"
      buttonText="Enviar"
      )
    div.full
      img(:src="require('../assets/img/vue.png')")
      section.itens
        itens-col2
        itens-col2
        itens-col2
</template>
<style lang="sass" scoped>
.full
  display: grid
  grid: auto / 500px auto
  
  .itens 
    display: flex
    flex-direction: column
</style>