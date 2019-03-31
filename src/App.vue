<template>
  <div id="app">
    <transition
      mode="out-in"
      enter-active-class = "animated bounceInLeft"
      leave-active-class = "animated bounceOutRight"
    >
      <router-view class="app-view"></router-view>
    </transition>
  </div>
  
</template>
<script>
import Margin from './components/Margin.vue'
export default {
  components:{Margin}
}

</script>
<style>
</style>






