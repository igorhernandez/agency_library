<template lang="pug">
  section.portfolios
    div.image(v-for="portfolio in portfolios" :style="portfolio") 
      div.content
        title-section-02.title-section( title="Services" description="será revertido para impulsionar")
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
        }
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
    .image 
      background-size: cover
      background-position: center
      height: 100%
      width: 100%
      max-width: 500px
      .title-section
        opacity: 0
        transition: .8s
        position: relative
        top: 300px
      .content 
        opacity: 0
        background-color: $blackfade02
        height: 100%
        transition: .8s
        h3
          display: block
          color: $white
      &:hover 
        .title-section, .content 
          opacity: 1
</style>