<template lang="pug">
        div.tooltip(@mouseover="hover = true" @mouseleave="hover = false") {{ text }}
            transition(name="slide-fade")
                span(v-if="hover"
                    :style="override"
                    :class='[\
                    `tooltip-${direction} tooltip-${animation}` ,\
                    ]'
                    ) {{ title }}
        
</template>

<script>
export default {
  name: "Tooltip",
  props: {
    text: {
      type: String,
      default: () => ""
    },
    direction: {
      type: String,
      validator(x) {
        return ["top", "right", "bottom", "left"].indexOf(x) !== -1
      }
    },
    title: {
      type: String,
      default: () => ""
    },
    animation: {
      type: String,
      default: "slide-fade",
      validator(x) {
        return ["slide-fade"].indexOf(x) !== -1
      }
    }
  },
  data(){
      return {
          hover: false
      }
  }
}
</script>
<style lang="sass" scoped>
    $ttpBgColor        : #365663
    $ttpFontColor      : #FFF
    $ttpWidth          : 50px
    $spanWidth         : 150px
    $ttpSpanMarginLeft : $spanWidth / 2 * (-1)

    .tooltip
        position: relative
        display: inline-block
        //width: $ttpWidth
        > span
            width: $spanWidth
            background-color: $ttpBgColor
            color: $ttpFontColor
            text-align: center
            padding: 5px 0
            border-radius: 6px
            position: absolute
            z-index: 1
            font-size: 14px
            font-weight: bold

    .tooltip-top
        bottom: calc(100% + 5px)
        left: 50% 
        margin-left: $ttpSpanMarginLeft
        &:after
            content: ""
            position: absolute
            top: 100%
            left: 50%
            margin-left: -5px
            border-width: 5px
            border-style: solid
            border-color: #365663 transparent transparent transparent

    .tooltip-right
        top: -13px
        left: calc(100% + 10px)
        &:after
            content: ""
            position: absolute
            top: 50%
            right: 100%
            margin-top: -5px
            border-width: 5px
            border-style: solid
            border-color: transparent #365663 transparent transparent

    .tooltip-bottom
        top: calc(100% + 10px)
        left: 50% 
        margin-left: $ttpSpanMarginLeft 
        &:after
            content: ""
            position: absolute
            top: -20%
            left: 50%
            margin-left: -5px
            border-width: 5px
            border-style: solid
            border-color: transparent transparent #365663 transparent

    .tooltip-left
        top: -13px
        right: calc(100% + 10px)
        &:after
            content: " "
            position: absolute
            top: 50%
            left: 100%
            margin-top: -5px
            border-width: 5px
            border-style: solid
            border-color: transparent transparent transparent #365663

    .fade-enter-active,
    .fade-leave-active 
        transition: opacity 0.5s

    .fade-enter, .fade-leave-to 
        opacity: 0

    .slide-fade-enter-active 
        transition: all 0.3s ease

    .slide-fade-leave-active 
        transition: all 0.1s cubic-bezier(1, 0.5, 0.8, 1)

    .slide-fade-enter, .slide-fade-leave-to 
        transform: translateX(7px)
        opacity: 0



</style>