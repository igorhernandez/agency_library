<template lang="pug">
    div.card
        figure
            img( :src="images", alt="Mockup - 01")
            h2 {{title}}
        p {{describe}}

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
    describe: {
      type: String,
      default: () => {
        return "Lorem Ipsum is dolor"
      }
    },
  },
}
</script>

<style lang="sass" scoped>
    .card
        display: flex
        flex-direction: column
        justify-content: space-between
        max-width: 242px
        margin: auto
        // height: 355px

        figure
            display: grid
            grid: auto / auto auto
            margin-bottom: 10px
            align-items: center
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
