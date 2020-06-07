<template>
  <div id="app">
    <NavBar />
  </div>
</template>

<script>
import NavBar from './components/NavBar';

export default {
  name: 'App',
  components: {
    NavBar
  }
}
</script>

<style>
  body {
    background-image: url("images/background.jpg");
    background-repeat: no-repeat;
    background-size:cover;
    background-attachment: fixed;
  }
</style>