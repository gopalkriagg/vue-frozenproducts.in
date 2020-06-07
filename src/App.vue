<template>
  <div id="app">
    <NavBar />
    <b-container class="bv-example-row">
      <b-img src="./assets/modern_frozen_products_logo.png" fluid alt="Responsive image"></b-img>
      <b-row>
        <b-col>1 of 3</b-col>
        <b-col>2 of 3</b-col>
        <b-col>3 of 3</b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import NavBar from "./components/NavBar";

export default {
  name: "App",
  components: {
    NavBar,
  },
};
</script>

<style>
body {
  background-image: url("assets/background.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
}
</style>
