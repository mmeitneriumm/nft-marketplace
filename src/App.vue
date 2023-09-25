<template>
  <div id="app">
    <nav-bar></nav-bar>
    <router-view></router-view>
  </div>
</template>
<script>
import navBar from './components/navBar.vue';

export default {
  components: {
    navBar
  }
}
</script>
<style>
  body {
    background-color: #18191c;
    margin: 20px;
  }
  #app {
    font-family: Verdana, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: white;
    z-index: 2;
  }

  #app::before{
    position: fixed;
    z-index: -1;
    bottom: 0;
    left: -10rem;
    width: 30rem;
    height: 10rem;
    background: #0000ad;
    filter: blur(10rem);
    content: " ";
    border-radius: 50% / 50%;
  }

  #app::after{
    position: fixed;
    z-index: -1;
    top: 0;
    right: -10rem;
    width: 30rem;
    height: 10rem;
    background: #4900a1;
    filter: blur(10rem);
    content: " ";
    border-radius: 50% / 50%;
    }
  
  .app__title{
    margin-left: 50px;
  }
</style>