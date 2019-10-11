<template lang="pug">
    div.content
        //- div.buttons
        div( v-if="navegacao" @click="next").right
            svg( aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chevron-right" class="svg-inline--fa fa-chevron-right fa-w-10" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512") 
                path( fill="currentColor" d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z")
            
        div( v-if="navegacao" @click="prev").left
            svg( aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chevron-left" class="svg-inline--fa fa-chevron-left fa-w-10" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512") 
                path( fill="currentColor" d="M34.52 239.03L228.87 44.69c9.37-9.37 24.57-9.37 33.94 0l22.67 22.67c9.36 9.36 9.37 24.52.04 33.9L131.49 256l154.02 154.75c9.34 9.38 9.32 24.54-.04 33.9l-22.67 22.67c-9.37 9.37-24.57 9.37-33.94 0L34.52 272.97c-9.37-9.37-9.37-24.57 0-33.94z")
        
        div(id="imgs" v-for="image in images").images
            slot(:name="'slide'+ image")
            slot(:name="'text'+ image")

        div( v-if="paginacao" 
            :class="[\`pagecontent-${ballsPosition}`\] " )
            div.margin
                div( v-for="(ball,index) in images"  @click="ballsbutton(index)" ).balls

        
    
</template>

<script>
import { setTimeout } from 'timers'
export default {
    props: {
        navegacao: {
            type: Boolean,
            default: true
        },
        paginacao: {
            type: Boolean,
            default: true
        },
        autoPlay: {
            type: Boolean,
            default: false
        },
        intervalTime: {
            type: Number,
            default: 5000
        },
        imagesAmount: {
            type: Number,
            default: 3
        },
        ballsPosition: {
            type: String,
            default: 'centerbottom'
        }
    },
    data() {
        return {
            indice: 0,
            images: 3,
            prevs: false,
        }
    },
    created() {
        this.images = this.imagesAmount
    },
    mounted() {
        
        this.mostraSlide(this.indice)

        if(this.autoPlay){
            this.startInterval()
        }
        
    },
    methods: {
         startInterval: function () {

            setInterval(() => {

                if(this.indice < this.images){
                    this.indice++
                    this.mostraSlide(this.indice)
                }
           
                if(this.indice >= this.images){
                    this.indice = 0
                    this.mostraSlide(this.indice)
                }

            }, this.intervalTime)

         },
        prev(){
            let slides = document.getElementsByClassName("images")
            
            if(this.indice > 0) {
                slides[this.indice].style.left = "10%"
                this.indice--
                slides[this.indice].style.left = "-50%"
                this.prevs = true

                setTimeout(() => {
                    this.mostraSlide(this.indice)
                }, 110)
            }
            else{
                this.indice = 0
            }

        },
        next(){
            let slides = document.getElementsByClassName("images")
            
            if(this.indice < this.images - 1){
                slides[this.indice].style.left = "-10%"
                this.indice++
                slides[this.indice].style.left = "50%"
                this.prevs = false

                setTimeout(() => {
                    this.mostraSlide(this.indice)
                }, 110)
                
            }

        },
        ballsbutton(indice){
            let slides = document.getElementsByClassName("images")

            if(indice < this.indice) { 
                
                if(this.indice > 0) {
                    slides[this.indice].style.left = "10%"
                    this.indice = indice
                    slides[this.indice].style.left = "-50%"
                    this.prevs = true

                    setTimeout(() => {
                        this.mostraSlide(this.indice)
                    }, 110)
                }
                else{
                    this.indice = 0
                }

            }
            else {
                if(this.indice < this.images - 1){

                    slides[this.indice].style.left = "-10%"
                    this.indice = indice
                    slides[this.indice].style.left = "50%"
                    this.prevs = false

                    setTimeout(() => {
                        this.mostraSlide(this.indice)
                    }, 110)
                
                }
            }
        },
        mostraSlide(indice) {

            this.indice = indice
            let slides = document.getElementsByClassName("images")
            let buttons = document.getElementsByClassName("balls")

            for(let i = 0; i <= this.images - 1; i++){
                if(indice == i ) {
                    slides[i].style.opacity = "1"
                    slides[i].style.left = "0"
                    buttons[i].style.backgroundColor = "white"
                }
                else{
                    slides[i].style.opacity = "0"
                    buttons[i].style.backgroundColor = "rgba(225, 225, 225, 0.4)"
                    if( this.prevs ) {slides[i].style.left = "10%"}
                    else {slides[i].style.left = "-10%"}
                    
                }
            }

        }
    }
}
</script>

<style lang="sass" scoped>

.fade-enter-active, .fade-leave-active
    transition: opacity .1s
.fade-enter, .fade-leave-to
    opacity: 0


.content
    width: 100%
    height: 100%
    display: flex
    position: relative
    flex-direction: row
    background-color: $background

    .left
        cursor: pointer
        position: absolute
        z-index: 15
        left: 0
        width: 8%
        height: 100% 
        display: flex
        justify-content: space-around
        transition: all .3s
        svg
            width: 20px
            color: $iconcolor
        &:hover
          background-image: linear-gradient(to right, $blackfade01, $blackfade)
          transition: 0.9

    .right
        cursor: pointer
        position: absolute
        z-index: 15
        right: 0
        width: 8%
        height: 100% 
        display: flex
        justify-content: space-around
        transition: all .3s
        svg
            width: 20px
            color: $iconcolor

        &:hover
          background-image: linear-gradient(to right, $blackfade, $blackfade01)
    .images
        display: flex
        // z-index: 0
        width: 100%
        text-align: left
        position: absolute
        flex-direction: column
        justify-content: center
        transition: all .6s
        // transform: translateX(30%)
        left: 0
        opacity: 1
        height: 100%

        div
            width: 100%
            height: 100%
            position: absolute
            transition: all .7s

        img
            width: 100%
            height: 100%
            position: absolute
            transition: all .7s
        h1, h2, h3
            z-index: 12
            color: $fontcolor
            width: fit-content
            margin: 1% 10%
            font-family: $font
        h2 
            font-size: 2em
        p, a
            z-index: 12
            color: $fontcolor
            width: fit-content
            margin: 1% 10% 0
            text-decoration: none
            font-size: 1.2em
            font-family: $font
        a 
            z-index: 12
            cursor: pointer

    //  Posição dos botões

    .pagecontent-centertop
        height: 9%
        position: absolute
        top: 0
        width: 100%
        z-index: 2
        display: flex
        .margin
            width: 20%
            margin: auto
            position: relative
            height: 100%
            display: flex
            justify-content: space-around
            .balls
                width: 11px
                height: 11px
                background-color: $button
                margin: auto
                border-radius: 50%
                cursor: pointer
                transition: .4 all
                &:hover 
                    background-color: $buttonselected

    .pagecontent-righttop
        height: 9%
        position: absolute
        top: 0
        width: 100%
        z-index: 2
        display: flex
        .margin
            width: 20%
            margin: auto 9% auto auto
            position: relative
            height: 100%
            display: flex
            justify-content: space-around
            .balls
                width: 11px
                height: 11px
                background-color: $button
                margin: auto
                border-radius: 50%
                cursor: pointer
                transition: .4 all
                &:hover 
                    background-color: $buttonselected

    .pagecontent-lefttop
        height: 9%
        position: absolute
        top: 0
        width: 100%
        z-index: 2
        display: flex
        .margin
            width: 20%
            margin: auto auto auto 9%
            position: relative
            height: 100%
            display: flex
            justify-content: space-around
            .balls
                width: 11px
                height: 11px
                background-color: $button
                margin: auto
                border-radius: 50%
                cursor: pointer
                transition: .4 all
                &:hover 
                    background-color: $buttonselected


    .pagecontent-centerbottom
        height: 9%
        position: absolute
        bottom: 0
        width: 100%
        z-index: 2
        display: flex
        .margin
            width: 20%
            margin: auto
            position: relative
            height: 100%
            display: flex
            justify-content: space-around
            .balls
                width: 11px
                height: 11px
                background-color: $button
                margin: auto
                border-radius: 50%
                cursor: pointer
                transition: .4 all
                &:hover 
                    background-color: $buttonselected


    .pagecontent-rightbottom
        height: 9%
        position: absolute
        bottom: 0
        width: 100%
        z-index: 2
        display: flex
        .margin
            width: 20%
            margin: auto 9% auto auto
            position: relative
            height: 100%
            display: flex
            justify-content: space-around
            .balls
                width: 11px
                height: 11px
                background-color: $button
                margin: auto
                border-radius: 50%
                cursor: pointer
                transition: .4 all
                &:hover 
                    background-color: $buttonselected

    
    .pagecontent-leftbottom
        height: 10%
        position: absolute
        bottom: 0
        width: 100%
        z-index: 2
        display: flex
        .margin
            width: 20%
            margin: auto auto auto 9%
            position: relative
            height: 100%
            display: flex
            justify-content: space-around
            .balls
                width: 11px
                height: 11px
                background-color: $button
                margin: auto
                border-radius: 50%
                cursor: pointer
                transition: .4 all
                &:hover 
                    background-color: $buttonselected

</style>