<template lang="pug">
  section.footer
    div.head-footer
      div.social
        a(href="#").btn-social
          font-awesome-icon.fontawesome(:icon="['fab','facebook-f']")
        a(href="#").btn-social
          font-awesome-icon.fontawesome(:icon="['fab','twitter']")
        a(href="#").btn-social
          font-awesome-icon.fontawesome(:icon="['fab','instagram']")
        a(href="#").btn-social
          font-awesome-icon.fontawesome(:icon="['fab','github']")
      div.call
        h2 Let's Talk?
      div.action
        button-04( link="#" :interno="true" text="Make an enquiry!")
</template>

<style lang="sass" scoped>
  .footer 
    background-color: $gray
    .head-footer 
      display: grid
      grid-template-columns: auto auto auto
      grid-gap: 20px
      align-items: center
      height: 200px
      font-family: $font
      .social, .action , .call
        display: grid
      .social, .action 
        align-content: center
      h2 
        font-size: 2.4em
      .call
        justify-content: center
      .action 
        justify-content: flex-end
      .social 
        justify-content: flex-start
        grid-template-columns: auto auto auto auto
        grid-gap: 5px
        .btn-social
          color: $white
          height: 35px
          width: 35px
          border: 2px solid $hoverRed
          border-radius: 50%
          display: flex
          justify-content: center
          align-items: center
          background-color: transparent
          transition: 0.6s all
          &:hover 
            background-color: $hoverRed
</style>