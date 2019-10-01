<template lang="pug">
  main.page
    navigation-left
    nuxt.content
</template>

<style lang="sass">
  .page 
    display: grid
    grid-template-columns: 15% auto
    .content 
      border-left: 1px solid $black
</style>
