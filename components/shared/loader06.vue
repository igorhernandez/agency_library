<template>
  <svg
    version="1.1"
    id="Layer_1"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    x="0px"
    y="0px"
    :width="width"
    :height="width"
    viewBox="0 0 24 30"
    style="enable-background:new 0 0 50 50;"
    xml:space="preserve"
  >
    <rect x="0" y="0" width="4" height="10" :fill="color ? color : color1">
      <animateTransform
        attributeType="xml"
        attributeName="transform"
        type="translate"
        values="0 0; 0 20; 0 0"
        begin="0"
        dur="0.6s"
        repeatCount="indefinite"
      />
    </rect>
    <rect x="10" y="0" width="4" height="10" :fill="color ? color : color2">
      <animateTransform
        attributeType="xml"
        attributeName="transform"
        type="translate"
        values="0 0; 0 20; 0 0"
        begin="0.2s"
        dur="0.6s"
        repeatCount="indefinite"
      />
    </rect>
    <rect x="20" y="0" width="4" height="10" :fill="color ? color : color3">
      <animateTransform
        attributeType="xml"
        attributeName="transform"
        type="translate"
        values="0 0; 0 20; 0 0"
        begin="0.4s"
        dur="0.6s"
        repeatCount="indefinite"
      />
    </rect></svg
></template>
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
        return "30px"
      }
    }
  }
}
</script>
<style lang="sass" scoped></style>
