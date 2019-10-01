<template lang="pug">
    div.container
        div.section-03
            section
                h2 
                    | {{ title }}
                
                p {{ description }}
                div.btn-zone
                    button-02( :link="linkSaiba" :interno="true" :text="buttonText")
            figure
                img( :src="images", alt="mockup - 01").class
</template>

<script>
export default {
  props:{
    images: String,
    title: {
      type: String,
      default: () => {
        return "Lorem Ipsum is dolor"
      }
    },
    description: {
      type: String,
      default: () => {
        return "Lorem Ipsum is dolor"
      }
    },
    buttonText: {
      type: String,
      default: () => {
        return "Lorem Ipsum is dolor"
      }
    },
    linkSaiba: {
      type: String,
      default: () => {
        return "Lorem Ipsum is dolor"
      }
    }
  },
}
</script>

<style lang="sass" scoped>
    .container
        background-color: $blue
        font-family: $font
    .section-03
        max-width: 1024px
        margin: auto
        align-items: center

        @media screen and ( min-width: 990px)
            display: flex
            justify-content: space-between
        @media screen and ( max-width: 989px)
            display: flex
            flex-direction: column

        section
          max-width: 400px
          @media screen and ( max-width: 989px)
            padding: 15px
          h2
            font-weight: bold
            color: $white
            line-height: 1.4em
            @media screen and ( min-width: 990px )
              font-size: 2.5em
            @media screen and ( max-width: 989px )
              font-size: 2.4em  

          p
            margin: 30px 0
            color: $text
            font-weight: 100
            line-height: 25px
            @media screen and ( min-width: 990px )
              font-size: 1.1em
            @media screen and ( max-width: 989px )
              font-size: 1em
              
        figure
            width: 50%
            @media screen and ( max-width: 989px )
                width: 100%
                max-width: 450px
                margin: 20px auto
                padding: 15px
            img
                width: 100%
        .btn-zone
            height: 50px
            width: 165px
       

</style>
