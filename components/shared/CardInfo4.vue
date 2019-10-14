<template lang="pug">
    div.card(:style="`text-align: ${textAlign}; align-items: ${alignItems}`")
        font-awesome-icon.fontawesome(icon="user-secret")
        h2(v-if="hasTitle") {{title}}
        span.divide
        p(v-if="hasDesc") {{description}}
        button-01( v-if="hasButton" :link="link" :interno="true" :text="linkText" class="btn")

</template>
<script>
export default {
  props: {
    images: {
      type: String,
    },
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
    comment: {
      type: String,
      default: () => {
        return "Lorem Ipsum is dolor"
      }
    },
    hasButton: {
      type: Boolean,
      default: () => {
        return true
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
    hasComment: {
      type: Boolean,
      default: () => {
        return true
      }
    },
    hasImage: {
      type: Boolean,
      default: () => {
        return true
      }
    },
    linkText: {
      type: String,
      default: () => {
        return "Lorem Ipsum is dolor"
      }
    },
    link: {
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
    .card
        display: flex
        flex-direction: column
        justify-content: space-between
        padding: 50px
        margin: auto
        background-color: $bgGray
        color: $white
        // max-width: 242px
        // height: 355px
        &:hover 
          background-color: $hoverRed
          transition: 0.6s
          .fontawesome 
            color: $white
          .divide 
            border-top: 3px solid $white 
        .fontawesome 
          margin-bottom: 20px
          color: $hoverRed
        figure
            margin: 0px
            img
                width: 100%
        p
          font-weight: 100
          font-size: 1em
          line-height: 25px

        a
          text-decoration: none

        h2
          font-size: 24px
          margin-bottom: 0

    .btn
      background-color: transparent
      color: #136aaa
      padding: 0 
      height: 0  
    .divide 
      width: 50px
      border-top: 3px solid $hoverRed 
    .fontawesome 
      font-size: 2.5em
</style>
