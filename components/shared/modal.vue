<template lang="pug">
    transition( name="fade")
        div(v-if="modal").container1
            div( @click="closeModal").background
            div.modal
                div.head
                    slot( name="icone")
                    h2 {{title}}
                    
                div.body
                    p {{text}}
                    div.buttonbox( v-if="textbtn")       
                        button-01( type="primary" :text="textbtn" @clickButton="$emit('clickModal')")
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            default: () => ''
        },
        text: {
            type: String,
            default: () => ''
        },
        textbtn: {
            type: String,
            default: () => 'Fechar'
        },
        modal: {
            type: Boolean,
            default: () => false
        }
    },
    data() {
        return {
            
        }
    },
    methods:{
        closeModal(){
            this.$emit('close')
        }
    }
}
</script>

<style lang="sass" scoped>


    .fade-enter-active, .fade-leave-active
        transition: opacity .5s
    .fade-enter, .fade-leave-to /* .fade-leave-active em versões anteriores a 2.1.8 */ 
        opacity: 0


    .container1
        display: flex
        justify-content: space-around
        align-items: center
        position: fixed
        left: 0
        top: 0
        height: 100vh
        width: 100%
        z-index: 999

        .background
            width: 100%
            height: 100%
            background-color: rgba(0,0,0, 0.4)

        .modal
            max-width: 400px
            height: auto
            background-color: white
            position: absolute
            border-radius: 20px
            
            @media screen and ( max-width: 540px)
                width: 80%

            .head
                height: auto
                border-radius: 20px 20px 0 0
                width: 100%
                background-color: #F5F5F5
                display: flex
                justify-content: space-evenly
                align-items: center
                position: relative
                padding: 35px 25px 35px 40px
                @media screen and ( max-width: 700px)
                    display: none


                img 
                    width: 58px
                    height: 58px
                    
                h2
                    width: 200px
                    color: black
                    margin: 0 0 0 30px
                    font-size: 1.25em
                    font-weight: bold
                    line-height: 25px

                    @media screen and ( max-width: 540px)
                        font-size: 0.9em

                    @media screen and (max-width: 320px)
                        font-size: 0.7em

                .icon
                    width: 30px
                    height: 30px            
                    position: absolute
                    top: 15px
                    right: 15px
                    cursor: pointer
                    svg 
                        fill: green

            .body 
                width: 100%
                border-radius: 0 0 20px 20px 
                padding: 32px 40px 40px 40px
                height: calc(100% - 140px)
                box-sizing: border-box
                display: flex
                flex-direction: column
                justify-content: space-between
                @media screen and ( max-width: 699px)
                    padding: 32px 20px 40px 20px

                p
                    color: $black
                    font-size: 1.13em
                    line-height: 26px

                    @media screen and ( max-width: 540px)
                        font-size: 0.8em
                        line-height: 20px

                a 
                    color: blue
                    text-decoration: none
            
            .buttonbox
                height: 45px
                width: 100%
                margin: 20px auto

                @media screen and ( max-width: 540px)
                    margin-top: 0
</style>