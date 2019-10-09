<template lang="pug">
    div.section-07
        section
            h2 
                | {{ title }}

            div.fields-zone
                input-01( v-for="field, index in fields" :key="field.id" :field="field")

            div.btn-zone
                button-01( :text="buttonText" @clickButton="")
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
        buttonText: {
            type: String,
            default: () => {
                return "Lorem Ipsum is dolor"
            }
        },
        fields: {
            type: Array,
            default:() => {
                return []
            }
        }
    },
}
</script>
<style lang="sass" scoped>
    
    .section-07
        font-family: $font
        background-color: $white
        background-repeat: repeat-x
        background-position-y: 60%
        background-attachment: fixed

        max-width: 1024px
        margin: auto
        align-items: center

        @media screen and ( min-width: 990px)
            display: flex
            justify-content: center
        @media screen and ( max-width: 989px)
            display: flex
            flex-direction: column
  
        section
            background-color: #ddd
            padding: 50px
            border-radius: 10px
            @media screen and ( max-width: 989px)
                padding: 15px
            h2
                font-weight: bold
                color: $blue
                line-height: 1.4em
                margin-bottom: 20px
                text-align: center
                @media screen and ( min-width: 990px )
                    font-size: 2.5em
                @media screen and ( max-width: 989px )
                    font-size: 2.4em
                
            .fields-zone
                padding: 20px
                margin-bottom: 40px

        .btn-zone
            max-width: 165px
            height: 50px
            margin: auto
</style>
