<template lang="pug">
  div.container
    div.logo
        img(:src="require('../../assets/img/vue.png')")
    div.copyright
        p &copy; 2019 
            strong Symma | Powered by Yunnit Group
    div.social
        img(:src="require('../../assets/img/vue.png')")
        img(:src="require('../../assets/img/vue.png')")
        img(:src="require('../../assets/img/vue.png')")
</template>

<style lang="sass" scoped>
    .container
        font-family: $font
        padding: 20px 40px
        background-color: $blue
        color: $black
        margin: auto
        display: grid
        grid: auto / auto auto 120px
           
    .copyright           
        width: calc( 100% + 80px )
        background-color: $blue
        padding: 20px
        p 
            font-size: 0.85em
            font-weight: 100
            color: $white

            strong
                color: $white
    .logo
        display: flex
        width: 100%
        img
            width: 130px

    .social
        display: grid
        grid: auto / auto auto auto
        grid-gap: 10px
        align-items: center
        width: 100%
        img
            width: 30px
</style>

