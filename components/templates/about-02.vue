<template lang="pug">
  section.about-box
    div.left
      div.content(v-for="content in left")
        figure 
          img(:src="content.img")
        div.text
          h3 {{content.title}}
          span {{content.description}}
        div.gradient
    div.right
      div.content(v-for="contents in right" :style="contents")
        figure 
          img(:src="contents.img")
        div.text
          h3 {{contents.title}}
          span {{contents.description}}
        div.gradient
</template>

<script>
export default {
  data(){
    return{
      left: [
        {
          img: require('../../assets/img/agency/dev.jpg'),
          title: 'Front-end',
          description: 'Uma descricao aqui oh!'
        }
      ],
      right: [
        {
          img: require('../../assets/img/agency/dev_02.jpg'),
          title: 'Back-end',
          description: 'Uma descricao aqui oh!'
        },
        {
          img: require('../../assets/img/agency/dev_03.jpg'),
          title: 'App',
          description: 'Uma Testei e funcionou aqui oh!'
        }
      ]
    }
  }
}
</script>

<style lang="sass" scoped>
  .about-box
    display: grid
    grid-template-columns: 70% auto
    grid-gap: 20px
    height: 600px
    .content 
      height: 100%
      display: flex 
      align-items: flex-end
      position: relative
      .gradient
        position: absolute
        height: 100% 
        width: 100%
        background-image: linear-gradient(45deg, $blackfade01, $whiteFade)
        transition: 1s all
        opacity: 1
        &:hover 
          opacity: 0
      figure 
        margin: 0
        height: 100%
        filter: grayscale(100%)  
      img 
        width: 100%
        height: 100%
        object-fit: cover
      .text 
        z-index: 1
        padding: 30px
        position: absolute
        text-shadow: 2px 2px 3px $blackfade01
        color: $white
        &:hover + .gradient
          opacity: 0
      h3, span 
        font-family: $font
      h3
        margin: 0
    .right 
      display: grid
      grid-template-rows: auto auto 
      grid-gap: 10px
</style>