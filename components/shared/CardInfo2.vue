<template lang="pug">
    div.card(:style="`align-items: ${alignItems}`")
        figure(v-if="hasImage")
            img( :src="images", alt="Mockup - 01")
        div.content
          h2(v-if="hasTitle") {{title}}
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
        display: grid
        grid: auto / auto auto
        justify-content: space-between
        margin: auto
        // height: 355px

        figure
            margin-bottom: 10px
            width: 100px
            height: 100px
            img
                width: 100%

        p
          color: $black
          font-weight: 100
          font-size: 1em
          line-height: 25px

        a
          text-decoration: none
          color: $black

        h2
          font-size: 24px

    .btn
      background-color: transparent
      color: #136aaa
      padding: 0 
      height: 0   
</style>
