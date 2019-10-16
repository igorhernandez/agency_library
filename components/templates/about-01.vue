<template lang="pug">
  section.about-box
    div.left
      div.content(v-for="content in left" :style="content")
        div.text
          h3 {{content.title}}
          span {{content.description}}
        div.gradient
    div.right
      div.content(v-for="contents in right" :style="contents")
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
          "background-image": `url(${require('../../assets/img/agency/dev_03.jpg')})`,
          title: 'Front-end',
          description: 'Uma descricao aqui oh!'
        }
      ],
      right: [
        {
          "background-image": `url(${require('../../assets/img/agency/dev.jpg')})`,
          title: 'Back-end',
          description: 'Uma descricao aqui oh!'
        },
        {
          "background-image": `url(${require('../../assets/img/agency/dev_02.jpg')})`,
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
    grid-gap: 10px
    height: 600px
    .content 
      background-color: $red
      height: 100%
      display: flex 
      align-items: flex-end
      background-size: cover
      background-repeat: no-repeat
      background-position: center
      .gradient 
        height: 100%
        width: 100%
        position: relative
        background-image: linear-gradient(45deg, $red, $whiteFade)
        transition: 1s all
        opacity: 0.2       
        &:hover 
          opacity: 0.9
      .text 
        z-index: 1
        padding: 30px
        position: absolute
        text-shadow: 2px 2px 3px $blackfade01
        color: $white
        &:hover + .gradient
          opacity: 1  
      h3 
        margin: 0
    .right 
      display: grid
      grid-template-rows: auto auto 
      grid-gap: 10px
</style>