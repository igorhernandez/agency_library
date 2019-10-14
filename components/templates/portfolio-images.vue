<template lang="pug">
  section.portfolios
    div.content(v-for="portfolio in portfolios" :style="portfolio") 
</template>

<script>
export default {
  data(){
    return{
      portfolios: [
        {
          "background-image": `url(${require('../../assets/img/agency/dev.jpg')})`
        },
        {
          "background-image": `url(${require('../../assets/img/agency/dev.jpg')})`
        },
        {
          "background-image": `url(${require('../../assets/img/agency/dev.jpg')})`
        },
         {
          "background-image": `url(${require('../../assets/img/agency/dev.jpg')})`
        },
        {
          "background-image": `url(${require('../../assets/img/agency/dev.jpg')})`
        },
        {
          "background-image": `url(${require('../../assets/img/agency/dev.jpg')})`
        },
      ]
    }
  }
}
</script>

<style lang="sass" scoped>
  .portfolios
    min-height: 500px
    width: 100% 
    display: grid
    grid-template-columns: auto auto auto
    grid-gap: 10px
    .content 
      background-size: cover
      background-position: center
      height: 100%
      width: 100%
      max-width: 500px
      img 
        width: 100%
</style>