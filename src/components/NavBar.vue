<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="dark" fixed="top">
      <b-navbar-brand href="#">Modern Frozen Products</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item href="/index">Home</b-nav-item>
          <b-nav-item href="/about">About Us</b-nav-item>
          <b-nav-item href="/products">Products</b-nav-item>
          <b-nav-item href="#">Get a Quote</b-nav-item>
          <b-nav-item href="#">Contact Us</b-nav-item>
          <b-nav-item href="#">FAQs</b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-item href="#">Facebook</b-nav-item>
          <b-nav-item href="#">Mail</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: "NavBar",
  props: {
    msg: String,
  },
};
</script>
