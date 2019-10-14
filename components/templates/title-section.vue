<template lang="pug">
  div.container
    span.divide
    h2 {{title}}.
    p {{description}}
</template>

<script>
export default {
  props:{
    title: {
      type: String,
      default: () => {
        return 'Title here!'
      }
    },
    description: {
      type: String,
      default: () => { 
        return 'Description here!'
      }
    }
  }
}
</script>

<style lang="sass" scoped>
  .container 
    padding: 50px
    .divide 
      display: block
      width: 30px
      border-top: 3px solid $hoverRed 
      margin-bottom: 20px
    h2,p 
      margin: 0
    h2 
      font-size: 2.5em
    p 
      font-weight: bold
      color: $hoverRed
</style>