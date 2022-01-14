<template>
    <div>
        <header-component></header-component>   

            <!-- Page content -->
                <div class="container container-body">
                    <router-view></router-view>
                </div>
            <!-- Fim Page content -->
            
        <footer-component></footer-component>        
    </div>
</template>

<script>
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import HeaderComponent from './_partials/header'
import FooterComponent from './_partials/footer'


export default {
    components: {
        HeaderComponent,
        FooterComponent
    }
}
</script>

<style scoped>
@import url('../assets/css/vuecarte.css');
@import url('../assets/css/reset.css');
@import url('../assets/css/header.css');
</style>