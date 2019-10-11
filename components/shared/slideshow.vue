<template lang="pug">
  hooper.hooper(
    :hoverPause="hoverPause"
    :itemsToShow="itemsToShow" 
    :centerMode="true" 
    :autoPlay="autoPlay"
    :playSpeed="autoPlaySpeed"
    :transition="transitionSpeed"
    pagination="no" )
    
    slide(v-for="(slide, idx) in images")
        img( :src="slide" )

    hooper-progress( v-if="progressBar" slot="hooper-addons" )
    hooper-pagination( v-if="pagination" slot="hooper-addons" )
    hooper-navigation( v-if="navigation" slot="hooper-addons" )
</template>

<script>

import { Hooper, 
    Slide, 
    Progress as HooperProgress, 
    Pagination as HooperPagination, 
    Navigation as HooperNavigation
} from 'hooper'
import 'hooper/dist/hooper.css'

export default {
    data(){
      return{
        images: []
      }
    },
    methods: {
      slide: function () {
        this.images = [
          require('../../assets/img/agency/dev.jpg'), 
          require('../../assets/img/agency/dev_02.jpg'),
          require('../../assets/img/agency/dev_03.jpg')
        ]
      }
    },
    components: {
        Hooper,
        Slide,
        HooperProgress,
        HooperPagination,
        HooperNavigation
    },
    props: {
        itemsToShow: {
            type: Number,
            default: 1
        },
        autoPlay: {
            type: Boolean,
            default: false
        },
        autoPlaySpeed: {
            type: Number,
            default: 3000
        },
        progressBar: {
            type: Boolean,
            default: false
        },
        pagination: {
            type: Boolean,
            default: false
        },
        navigation: {
            type: Boolean,
            default: false
        },
        transitionSpeed: {
            type: Number,
            default: 400
        },
        hoverPause: {
            type: Boolean,
            default: false
        }
    },
    mounted(){ 
      this.slide()
    }
}
</script>

<style lang="sass" scoped>
  .hooper-indicator
      background-color: green !important
  .hooper-indicator:hover,
  .hooper-indicator.is-active
      background-color: red !important
  .hooper
    height: 100vh
    background-color: $black
    button 
      color: $white
  .hooper-slide
      display: flex
      align-items: center
      justify-content: center
  img 
    opacity: 0.4

</style>