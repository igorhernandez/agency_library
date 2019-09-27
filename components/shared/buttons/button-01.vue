<template lang="pug">
    button( v-if="!link" @click.prevent="$emit('clickButton')").btn
        span {{ text }}   
    nuxt-link( v-else-if="interno" :to="linkI8n(link)" ).btn.link
        span {{ text }}  
    a( v-else :href="link" target="_blank").btn.link
        span {{ text }} 
</template>

<script>
export default {
    props:["text", "link", "interno"],
    methods:{
        linkI8n(path){
            return this.localePath(path)
        }
    }
}
</script>

<style lang="sass" scoped>
    .link
        text-align: center
        text-decoration: none
    .btn
        width: 100%
        height: auto
        border: 2px solid transparent
        background-color: $blue
        font-size: .9em
        display: grid
        align-items: center
        color: $white
        padding: 14px
        box-sizing: border-box
        border-radius: 10px
        transition: 0.4s all
        cursor: pointer
        font-weight: bold
        &:hover
            // background-color: $orange 
            transform: scale(1.1)
        span
            margin: auto
</style>
