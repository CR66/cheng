<template>
    <div class="pet_mian" id="top">
        <app-header></app-header>
        <app-nav></app-nav>
        <app-main></app-main>
        <app-contect></app-contect>
    </div>
</template>
<script>
import AppHeader from "./Appheader.vue";
import AppNav from "./Appnav.vue";
import AppMain from "./Appmain.vue";
import AppContect from "./Appcontect.vue";
export default {
    components:{AppHeader,AppNav,AppMain,AppContect}
}
</script>

