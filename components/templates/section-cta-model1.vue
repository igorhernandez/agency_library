<template lang="pug">
    div.container
        div.section-03
            section
                h2(v-if="hasTitle")
                    | {{ title }}
                
                div.btn-zone
                    button-02( :link="linkSaiba" :interno="true" :text="buttonText")
</template>

<script>
export default {
  props:{
    title: {
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
        display: flex
        align-items: center
        justify-content: center
        @media screen and ( max-width: 989px)
            flex-direction: column

        section
          max-width: 800px
          display: grid
          grid: auto / auto auto
          grid-gap: 20px
          align-items: center
          @media screen and ( max-width: 989px)
            padding: 15px
          h2
            font-weight: bold
            color: $white
            line-height: 1.4em
            font-size: 1.4em  
        
        .btn-zone
            height: 50px
            width: 165px

       

</style>
