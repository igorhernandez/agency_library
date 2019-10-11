<template>
<div>

  <!--------------------------
  ------- Circle Loader ------
  ---------------------------->

  <svg
    v-if="type == 'circle'"
    version="1.1"
    id="id"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    :width="size"
    :height="size"
    :viewBox="(largeSpin) ? '0 0 50 50' : '0 0 40 40'"
    xml:space="preserve"
  >
    <path v-if="!largeSpin" :opacity="opacity" :fill="color[0]" d="M20.201,5.169c-8.254,0-14.946,6.692-14.946,14.946c0,8.255,6.692,14.946,14.946,14.946
    s14.946-6.691,14.946-14.946C35.146,11.861,28.455,5.169,20.201,5.169z M20.201,31.749c-6.425,0-11.634-5.208-11.634-11.634
    c0-6.425,5.209-11.634,11.634-11.634c6.425,0,11.633,5.209,11.633,11.634C31.834,26.541,26.626,31.749,20.201,31.749z"/>
    <path :fill="color[0]" :d="(largeSpin) ? 'M43.935,25.145c0-10.318-8.364-18.683-18.683-18.683c-10.318,0-18.683,8.365-18.683,18.683h4.068c0-8.071,6.543-14.615,14.615-14.615c8.072,0,14.615,6.543,14.615,14.615H43.935z' : 'M26.013,10.047l1.654-2.866c-2.198-1.272-4.743-2.012-7.466-2.012h0v3.312h0C22.32,8.481,24.301,9.057,26.013,10.047z'" >
      <animateTransform
        attributeType="xml"
        attributeName="transform"
        type="rotate"
        :from="(largeSpin) ? '0 25 25' : '0 20 20'"
        :to="(largeSpin) ? '360 25 25' : '360 20 20'"
        :dur="dur + 's'"
        repeatCount="indefinite"
      />
    </path>
  </svg>

  <!--------------------------
  -------- Bar Loader --------
  ---------------------------->

  <svg
    v-if="type == 'bar'"
    :id="id"
    x='0px'
    y='0px'
    version='1.1'
    xmlns='http://www.w3.org/2000/svg'
    xmlns:xlink='http://www.w3.org/1999/xlink'
    :width='size + "px"'
    :height='size + "px"'
    viewBox='0 0 24 30'
    style='enable-background:new 0 0 50 50;'
    xml:space='preserve'
  >
    <rect x="0" y="0" width="4" :height="(bar == 'opacity-bar') ? '20' : '10' " :fill="color[0]">  

      <animateTransform
        v-if="bar == 'down-bar' || bar == 'bouncing-bar' "
        attributeType="xml"
        attributeName="transform"
        :type="(bar == 'down-bar') ? 'scale' : 'translate' "
        :values="(bar == 'down-bar') ? '1,1; 1,3; 1,1' : '0 0; 0 20; 0 0' "
        begin="0s"
        :dur="dur"
        repeatCount="indefinite"
      />

      <animate
        v-if="bar == 'grown-bar' || bar == 'opacity-bar' "
        attributeType='XML'
        :attributeName='(bar == "grown-bar") ? "height" : "opacity" '
        :values='(bar == "grown-bar") ? "5;21;5" : "1; .2; 1" '
        begin='0s'
        :dur='dur'
        repeatCount='indefinite'
      />

      <!-- Animação envolvendo o 'grown-bar' -->

      <animate
        v-if="bar == 'grown-bar'"
        type="scale"
        attributeName='y'
        attributeType='xml'
        values='13; 5; 13'
        begin='0s'
        :dur='dur'
        repeatCount='indefinite'
      />

    </rect>

    <rect x="10" y="0" width="4" :height="(bar == 'opacity-bar') ? '20' : '10' " :fill="color[1]">

      <animateTransform
        v-if="bar == 'down-bar' || bar == 'bouncing-bar'"
        attributeType="xml"
        attributeName="transform"
        :type="(bar == 'down-bar') ? 'scale' : 'translate'"
        :values="(bar == 'down-bar') ? '1,1; 1,3; 1,1' : '0 0; 0 20; 0 0'"
        begin="0.2s"
        :dur='dur'
        repeatCount="indefinite"
      />

      <!-- grown -->
      <animate
        v-if="bar == 'grown-bar' || bar == 'opacity-bar'"
        :attributeName="(bar == 'grown-bar') ? 'height' : 'opacity' "
        attributeType='XML'
        :values="(bar == 'grown-bar') ? '5;21;5' : '1; .2; 1' "
        begin='0.15s'
        :dur='dur'
        repeatCount='indefinite'
      />

      <!-- Animação envolvendo o 'grown-bar' -->

      <animate
        v-if="bar == 'grown-bar'"
        type="scale"
        attributeName='y'
        attributeType='xml'
        values='13; 5; 13'
        begin='0.15s'
        :dur='dur'
        repeatCount='indefinite'
      />
    </rect>

    <rect x="20" y="0" width="4" :height="(bar == 'opacity-bar') ? '20' : '10' " :fill="color[2]">      

      <animateTransform
        v-if="bar == 'down-bar' || bar == 'bouncing-bar'"
        attributeType="xml"
        attributeName="transform"
        :type="(bar == 'down-bar') ? 'scale' : 'translate' "
        :values="(bar == 'down-bar') ? '1,1; 1,3; 1,1' : '0 0; 0 20; 0 0' "
        begin="0.4s"
        :dur='dur'
        repeatCount="indefinite"
      />

      <animate
        v-if="bar == 'grown-bar' || bar == 'opacity-bar'"
        :attributeName='(bar == "grown-bar") ? "height" : "opacity" '
        attributeType='XML'
        :values='(bar == "grown-bar") ? "5;21;5" : "1; .2; 1" '
        begin='0.3s'
        :dur='dur'
        repeatCount='indefinite'
      />

      <!-- Animação envolvendo o 'grown-bar' -->

      <animate
        v-if="bar == 'grown-bar'"
        type="scale"
        attributeName='y'
        attributeType='XML'
        values='13; 5; 13'
        begin='0.3s'
        :dur='dur'
        repeatCount='indefinite'
      />
    </rect>

  </svg>

  </div>
</template>

<script>
export default {
    name: 'Loader',
    props: {
        bar: {
            type: String,
            default: () => "opacity-bar",
            required: false,
            validator(x) {
              return ['down-bar','grown-bar','opacity-bar','bouncing-bar'].indexOf(x) !== -1
            }
        },
        color: {
            type: Array,
            default: () => ['#3d65a8','#3d65a8','#3d65a8'],
            required: false,
        },
        dur: {
            type: Number,
            default: () => 0.6,
            required: false,
        },
        id: {
            type: String,
            default: () => 'Layer_01',
            required: false,
        },
        largeSpin: {
            type: Boolean,
            default: () => false,
            required: false,
            validator(x){
              return [true,false].indexOf(x) !== -1
            }
        },
        opacity: {
            type: Number,
            default: () => 0.2,
            required: false
        },
        size: {
            type: Number,
            default: () => 30,
            required: false,
        },
        type: {
            type: String,
            default: () => 'circle',
            required: false,
            validator(x) {
              return ['bar','circle'].indexOf(x) !== -1
            }
        }
    },
    data(){
      return {
        regex: /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/,
        status: false
      }
    },
    watch: {
        color: {
            deep: true,
            handler(){
                this.validationColor()
            }
        },
        size: {
          deep: true,
          handler(){
              this.checkSize()
          }
        }
    },
    methods: {

        validationColor() {
          // Validar a quantidade de espacoes 
          if(this.color.length == 3){
            for(let i = 0; i < 3; i++){
              if(!this.regex.test(this.color[i])){
                this.colorIndication = true
                return
              }
            }
          }
          else{
            this.colorIndication = true
            return
          }
        }
    }
}
</script>
<style lang="sass" scoped></style>
