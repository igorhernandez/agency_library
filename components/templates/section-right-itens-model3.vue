<template lang="pug">
    div.color          
        div.section-04
            figure
                img( :src="images", alt="Mockup - 03").class
            section
                h2(v-if="hasTitle")
                    | {{ title }}

                p(v-if="hasDesc") {{ description }}
                itens-col2-model3(:hasTitle="false" :hasDesc="false" :textAlign="textAlign" :alignItems="alignItems")
                //- div.btn-zone
                //-     button-01( :text="buttonText" @clickButton="")        
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
    hasTitle: {
      type: Boolean,
      default: () => {
        return true
      }
    },
    hasDesc: {
      type: Boolean,
      default: () => {
        return true
      }
    },
    buttonText: {
      type: String,
      default: () => {
        return "Lorem Ipsum is dolor"
      }
    },
    textAlign: {
      type: String,
      default: () => {
        return 'inherit'
      }
    },
    alignItems: {
      type: String,
      default: () => {
        return 'inherit'
      }
    }
  },
}
</script>
<style lang="sass" scoped>
    
    .color
        font-family: $font
        background-color: $white
        background-image: url('/img/pattern-azul.svg')
        background-repeat: repeat-x
        background-position-y: 60%
        background-attachment: fixed

    .section-04
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
            margin-top: 60px
            max-width: 400px
            @media screen and ( max-width: 989px)
                padding: 15px
            h2
                font-weight: bold
                color: $blue
                line-height: 1.4em
                @media screen and ( min-width: 990px )
                    font-size: 2.5em
                @media screen and ( max-width: 989px )
                    font-size: 2.4em
                
            p
                color: $darkgray
                margin: 30px 0
                font-weight: 100
                line-height: 1.6em
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
            max-width: 165px
            height: 50px
            

</style>
