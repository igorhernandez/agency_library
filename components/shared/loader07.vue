<template lang="pug">
  svg#Layer_1(version='1.1', xmlns='http://www.w3.org/2000/svg', xmlns:xlink='http://www.w3.org/1999/xlink', x='0px', y='0px', :width='width', :height='height', viewBox='0 0 24 30', style='enable-background:new 0 0 50 50;', xml:space='preserve')
    rect(x='0', y='13', width='4', height='5', :fill='color ? color:color1')
      animate(attributeName='height', attributeType='XML', values='5;21;5', begin='0s', dur='0.6s', repeatCount='indefinite')
      animate(attributeName='y', attributeType='XML', values='13; 5; 13', begin='0s', dur='0.6s', repeatCount='indefinite')
    rect(x='10', y='13', width='4', height='5', :fill='color ? color:color2')
      animate(attributeName='height', attributeType='XML', values='5;21;5', begin='0.15s', dur='0.6s', repeatCount='indefinite')
      animate(attributeName='y', attributeType='XML', values='13; 5; 13', begin='0.15s', dur='0.6s', repeatCount='indefinite')
    rect(x='20', y='13', width='4', height='5', :fill='color ? color:color3')
      animate(attributeName='height', attributeType='XML', values='5;21;5', begin='0.3s', dur='0.6s', repeatCount='indefinite')
      animate(attributeName='y', attributeType='XML', values='13; 5; 13', begin='0.3s', dur='0.6s', repeatCount='indefinite')


</template>
<script>
export default {
  props: {
    color: String,
    color1: {
      type: String,
      default: () => {
        return "blue"
      }
    },
    color2: {
      type: String,
      default: () => {
        return "green"
      }
    },
    color3: {
      type: String,
      default: () => {
        return "red"
      }
    },
    width: {
      type: String,
      default: () => {
        return "24px"
      }
    },
    height: {
      type: String,
      default: () => {
        return "30px"
      }
    }
  }
}
</script>
<style lang="sass" scoped></style>
