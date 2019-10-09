<template lang="pug">      
    div.section-06
        div.container
            section
                h2 
                    | {{ title }} 
            img( :src="images", alt="Mockup - 03").class
                     
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
        }
    },
}
</script>
<style lang="sass" scoped>
    
    .section-06
        font-family: $font
        background-color: $white
        background-repeat: repeat-x
        background-position-y: 60%
        background-attachment: fixed

        // max-width: 1024px
        margin: auto
        align-items: center
        flex-direction: column
        display: flex
        justify-content: space-between
        height: 100vh
        .container
            display: flex
            justify-content: center
            align-items: center
            position: relative
            height: 100vh
            @media screen and ( max-width: 989px )
                width: 100%
                // max-width: 450px
                // margin: 20px auto
                // padding: 15px
            img
                width: 100% 
                height: 100vh
            section
                position: absolute
                max-width: 600px
                @media screen and ( max-width: 989px)
                    padding: 15px
                h2
                    font-weight: bold
                    color: $white
                    line-height: 1.4em
                    text-align: center
                    @media screen and ( min-width: 990px )
                        font-size: 2.5em
                    @media screen and ( max-width: 989px )
                        font-size: 2.4em           

</style>
