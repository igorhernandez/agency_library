<template lang="pug">
    button( @click.prevent="$emit('clickButton')" :class="state ? '' : 'disabled'").btn
        span {{ text }}     
</template>
<script>
export default {
    props:["text", "state"]
}
</script>

<style lang="sass" scoped>
    .btn
        width: 100%
        height: 100%
        border: 2px solid transparent
        background-color: $blue
        font-size: 1em
        display: grid
        align-items: center
        color: $white
        padding: 14px
        border-radius: 10px
        transition: 0.4s all
        cursor: pointer
        font-weight: bold
        &:hover
            background-color: $blue 
            color: $white
    .disabled
        background-color: rgba($text, 0.6)
</style>
