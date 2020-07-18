<template>
  <div id="app">

      <Header></Header>
      <div class="contenido">

      </div>

    <router-view/>
    <Footer></Footer>
  </div>
</template>



<script>
// @ is an alias to /src
import Header from './components/Header.vue';
import Footer from './components/Footer';

export default {
  name: 'Home',
  components: {
    Header,
    Footer
  },
};
</script>

<style scoped>


</style>

