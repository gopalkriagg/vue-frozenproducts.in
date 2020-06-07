<template>
  <div id="app">
    <NavBar />
    <b-container class="bv-example-row mt-4">
      <b-row align-h="center">
        <b-col sm="3">
          <b-img
            src="./assets/modern_frozen_products_logo.png"
            fluid
            alt="Responsive image"
          ></b-img>
        </b-col>
      </b-row>
      <b-row align-h="center" class="mt-2">
        <b-col sm="4">
          <h1 class="mx-auto">
            <b-badge variant="success">Modern Frozen Products</b-badge>
          </h1>
        </b-col>
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
