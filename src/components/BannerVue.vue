<template>

<div class="container">
    <b-carousel
      id="carousel-1"
      v-model="slide"
      :interval="4000"
      controls
      indicators
      background="#ababab"
      img-width="1024"
      img-height="480"
      style="text-shadow: 1px 1px 2px #333;">
      
      <!-- Text slides with image -->
      <b-carousel-slide img-src="static/images/slider-01.jpg"></b-carousel-slide>

      <!-- Slides with custom text -->
      <b-carousel-slide img-src="static/images/slider-02.jpg"></b-carousel-slide>

      <!-- Slides with image only -->
      <b-carousel-slide img-src="static/images/slider-03.jpg"></b-carousel-slide>


    </b-carousel>

  </div>
</template>

<script>
export default {
  name: 'BannerVue',
  props: [],
  data () {
    return {

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>