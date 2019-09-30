<template lang="pug">
    div(
        :class="!field.readonly && field.value != '' && field.valid ? 'correct' : !field.readonly && !field.valid ? 'error' : ''"
        :style="field.type == 'textarea' ? {'height': '180px', 'justify-content' : 'end'} : ''"
    ).camp
        label(  :for="field.id"
                :class="[focus || field.value != '' ? 'selectLabel' : '', field.readonly ? 'readonly' : '']"
                :style="field.type == 'textarea' && ( focus || field.value ) ? {'top': '3px'} : ''"
                )

                | {{ field.label }}
        input(  :id="field.id"
                @focus="field.readonly ? '' : focus = true"
                @blur="field.readonly ? '': focus = false, field.valid = field.value != '', hasFunction(field)"
                :type="field.type"
                :readonly="field.readonly"
                :class="field.readonly ? 'readonly' : ''"
                v-model="field.value"
                v-if="field.type != 'textarea' && field.type != 'money' & field.type != 'mask'"
                )
        textarea(
              v-else-if="field.type == 'textarea'"
              :id="field.id"
              @focus="field.readonly ? '' : focus = true "
              @blur="field.readonly ? '' : focus = false, field.valid = field.value != '' "
              :readonly="field.readonly"
              :type="field.type"
              v-model="field.value"
        )
        input(  :id="field.id"
                @focus="field.readonly ? '' : focus = true "
                @blur="field.readonly ? '' : focus = false, field.valid = field.value != '', hasFunction(field) "
                type="text"
                v-model.lazy="field.value"
                v-money="money"
                :readonly="field.readonly"
                @keyup="$emit('inputEvent')"
                v-else-if="field.type == 'money'"
                )
                //- v-if="!field.mask"
        input(  :id="field.id"
                @focus="field.readonly ? '' : focus = true "
                @blur="field.readonly ? '' : focus = false, field.valid = field.value != '', hasFunction(field) "
                type="text"
                :readonly="field.readonly"
                v-model.lazy="field.value"
                @keyup="$emit('inputEvent')"
                v-mask="mask"
                v-else
                )
</template>
<script>

import { mask } from 'vue-the-mask'
import { VMoney } from 'v-money'
export default {
  props: {
    field: {
      type: Object,
      required: true,
    },
    mask: {
      type: String,
    }
  },
  directives: {
    money: VMoney,
    mask
  },
  data() {
    return {
      focus: false,
      money: {
          decimal: ',',
          thousands: '.',
          prefix: '',
          precision: 2,
          masked: false
        }
    }
  },
  methods: {
    hasFunction(has) {
      if (has.focusFunction) { this.$emit('blurFunction') }
    },
  },
  mounted() {
    if (this.field.mask) {
      const $ = document.querySelector.bind(document)
      // $(`#${this.field.id}`).addEventListener("focus", () =>{
      //   this.focus = true
      // })
      // $(`#${this.field.id}`).addEventListener("blur", () =>{
      //   this.focus = false
      // })
    }
  },
}
</script>

<style lang="sass" scoped>
    $padInputTop: 20
    $padInputLeft: 20

    input[type=number]::-webkit-inner-spin-button, 
    input[type=number]::-webkit-outer-spin-button
        -webkit-appearance: none
        margin: 0
    input[type=number] 
        -moz-appearance: textfield
        appearance: textfield
        margin: 0
    input[type=month]::-webkit-inner-spin-button, 
    input[type=month]::-webkit-outer-spin-button
        -webkit-appearance: none
        margin: 0
    input[type=month] 
        -moz-appearance: textfield
        appearance: textfield
        margin: 0

    .correct
      label
        color: $text!important
    .error
      label
        color: $red!important
    .camp
        width: 100%
        padding: #{$padInputTop + px} #{$padInputLeft + px}
        margin-bottom: 20px
        border-radius: 10px
        border: 1px solid transparent
        background-color: $gray
        display: flex
        height: 60px
        justify-content: center
        flex-direction: column
        position: relative
        label
            position: relative
            z-index: 1
            top: 0
            transition: 0.4s all
            width: 100%
            cursor: text
            color: $darkgray
            font-weight: 600
            &:not(.selectLabel)
                font-size: 0.9em
        .readonly
            cursor: default
        .selectLabel
            top: -8px
            font-size: 0.75em
        input,textarea
            position: absolute
            background-color: transparent
            font-weight: 600
            width: calc( 100% - #{( $padInputLeft * 2 )}px)
            font-size: 0.85em
            margin-top: 10px
            color: $black
            border: none
            outline: none

        textarea
          height: 160px
          resize: none
          margin-top: 20px

</style>
