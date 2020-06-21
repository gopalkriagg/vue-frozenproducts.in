<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="dark" fixed="top">
      <b-navbar-brand href="#">Modern Frozen Products</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item :active="$page === 'Home'" href="/index">Home</b-nav-item>
          <b-nav-item :active="$page === 'About'" href="/about"
            >About Us</b-nav-item
          >
          <b-nav-item :active="$page === 'Products'" href="/products"
            >Products</b-nav-item
          >
          <b-nav-item :active="$page === 'Quote'" href="/quote"
            >Get a Quote</b-nav-item
          >
          <b-nav-item :active="$page === 'ContactUs'" href="/contact"
            >Contact Us</b-nav-item
          >
          <b-nav-item :active="$page === 'FAQs'" href="/faqs">FAQs</b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-item href="http://facebook.com/frozengreenpeas">Facebook</b-nav-item>
          <b-nav-item href="mailto:ashwini.bindu@gmail.com">Mail</b-nav-item>
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
