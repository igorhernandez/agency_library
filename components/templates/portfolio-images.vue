<template lang="pug">
  section.portfolios
    div.image(v-for="portfolio in portfolios") 
      img(:src="portfolio.image")
      div.content
        title-section-02.title-section( :title="portfolio.title" :description="portfolio.description")
</template>

<script>
export default {
  data(){
    return{
      portfolios: [
        {
          image: require('../../assets/img/agency/dev.jpg'),
          title: 'Front-end',
          description: 'Descricao aqui oh!'
        },
        {
          image: require('../../assets/img/agency/dev_02.jpg'),
          title: 'App',
          description: 'Descricao aqui oh!'
        },
        {
          image: require('../../assets/img/agency/dev_03.jpg'),
          title: 'Back-end',
          description: 'Descricao aqui oh!'
        },
        {
          image: require('../../assets/img/agency/face.jpg'),
          title: 'Agencia',
          description: 'Descricao aqui oh!'
        },
        {
          image: require('../../assets/img/agency/plan.jpg'),
          title: 'Marketing',
          description: 'Descricao aqui oh!'
        },
        {
          image: require('../../assets/img/agency/video.jpg'),
          title: 'Video Maker',
          description: 'Descricao aqui oh!'
        }
      ]
    }
  }
}
</script>

<style lang="sass" scoped>
  .portfolios
    height: 500px
    width: 100% 
    display: grid
    grid-template-columns: auto auto auto
    grid-gap: 20px
    padding-bottom: 160px
    .image 
      width: 100%
      height: 100% 
      height: 350px
      cursor: pointer
      position: relative
      img 
        filter: grayscale(100%)
        width: 100%
        height: 100% 
        object-fit: cover
      .content 
        opacity: 0
        background-color: $blackfade02
        height: 100%
        width: 100%
        transition: .8s all
        position: absolute
        top: 0px
        h3
          display: block
          color: $white
        .title-section
          opacity: 0
          transition: .8s all
      &:hover 
        .title-section, .content 
          opacity: 1
</style>