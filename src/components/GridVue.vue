<template>

<div :class="container">
    <div class="'col-'+ tamanho">
      <slot></slot>
    </div>
</div>


</template>

<script>

export default {
  name: 'GridVue',
  props: ['tamanho'],
  data () {
    return {

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>