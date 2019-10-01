<template lang="pug">
    div( id="menu")
        header(id="header")
            figure
                nuxt-link( to="/")
                    img(src="../../assets/img/vue.png" alt="Logotipo")
            nav
                ul.menu-desk
                    li
                        a( href="/") Layout 1
                    li 
                        a( href="/section-left") Layout 2
                    li 
                        a( href="") Layout 3
                    li 
                        a( href="") Layout 4
                transition(name="slide-fade")
                    ul.menu-mb
                        li
                            div(v-if="teste" @click="teste = false" )
                                svg( aria-hidden="true" focusable="false" data-prefix="fas" data-icon="times" class="svg-inline--fa fa-times fa-w-11" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 352 512")
                                    path(fill="currentColor" d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z")
                            div( v-else @click="teste = true" ) 
                                svg(aria-hidden="true" focusable="false" data-prefix="fas" data-icon="bars" class="svg-inline--fa fa-bars fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512")
                                    path( fill="currentColor" d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z")
        transition(name="slide-fade")
            div.menu-mb-open(v-if="teste")
                li
                    span teste                        
                li 
                    span teste
                li 
                    span teste                    
                li 
                    span teste
</template>

<script>
export default {
    data() {
        return {
            teste: false,
            isOpen : false
        }
    },
    watch:{
        $route: function(){
            this.teste = false
        }
    }
}
</script>

<style lang="sass">
    .btn-header
        button
            padding: 15px 20px !important
            font-size: 1em !important
</style>

<style lang="sass" scoped>
    *
        text-decoration: none
        font-family: sans-serif
    #menu
        position: fixed
        top: 0
        z-index: 3
        width: 100%
        background-color: $blue
        box-shadow: 0px 0px 3px rgba($black, 0.2)
        header
            background-color: $blue
            width: 100%
            display: flex
            padding-right: 10px
            margin: auto
            justify-content: space-between
           
            figure 
                display: flex
                align-items: center
                img
                    max-width: 100px
            ul
                display: flex
                list-style: none
                align-content: center
                grid: auto / auto auto
                grid-column-gap: 20px
                width: 100%
                justify-content: flex-end
            li 
                display: flex 
                align-items: center
                cursor: pointer
        nav
            display: flex
            align-content: center
            align-items: center
            width: 100%
            text-transform: uppercase
        .menu-mb
            display: none
            li 
                text-align: right
                a
                    color: $white
            svg 
                width: 30px
                color: $white

        .menu-mb-open 
            display: none
        .btn-blue 
            background-color: $blue
            color: $white
            padding: 20px
            border-radius: 20px
        @media (max-width:765px)
            .menu-desk
                display: none
            .menu-mb
                display: flex
                div
                    cursor: pointer
            .menu-mb-open
                display: flex
                flex-direction: column
                list-style: none
                align-items: center
                padding: 50px
                text-transform: uppercase
                li 
                    margin-top: 10px
                    font-size: 1rem
            .slide-fade-enter-active 
                transition: all .3s ease
            .slide-fade-leave-active 
                transition: all .8s cubic-bezier(1.0, 0.5, 0.1, 1.0)
            .slide-fade-enter, .slide-fade-leave-to
                transform: translateX(10px)
                opacity: 0

        .menu-desk
            li
                margin: 0 10px
                font-size: 1em
                padding: 5px
                transition: 0.4s all
                border-bottom: 1px solid transparent
                &:hover
                    border-bottom: 1px solid #f7f7f7
                    transition: 0.4s all
                a
                    transition: 0.4s all
                    color: $white
                    
                    &:hover
                        color: #f7f7f7
                
                &:nth-child(4)
                    a
                        color: $white
                        &:hover
                        color: $white!important          
</style>
