<template lang="pug">
    button( v-if="!link" @click.prevent="$emit('clickButton')").btn
        span {{ text }}  
    a( v-else :href="link" target="_blank").btn.link
        span {{ text }} 
</template>

<script>
export default {
    props:["text", "link", "interno"]
}
</script>

<style lang="sass" scoped>
    .link
        text-align: center
        text-decoration: none
    .btn
        width: 100%
        height: auto
        border: 2px solid $hoverRed
        background-color: transparent 
        font-size: .9em
        display: grid
        align-items: center
        color: $white
        padding: 14px
        box-sizing: border-box
        transition: 0.6s all
        cursor: pointer
        font-weight: bold
        &:hover
            background-color: $hoverRed 
            transform: scale(1.1)
</style>
