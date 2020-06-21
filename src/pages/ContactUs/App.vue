<template>
  <div id="app">
    <NavBar />
    <b-container class="bv-example-row">
      <b-row class="my-5" />
      <b-row align-h="center">
        <b-col sm="3">
          <b-img
            src="../../assets/modern_frozen_products_logo.png"
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
      <b-row align-h="center" class="mt-2">
        <b-col>
          <b-card no-body class="overflow-hidden">
            <b-row no-gutters>
              <b-col md="6">
                <b-card-body>
                  <b-card-text>
                    <address>
                      <strong
                        >For any query regarding frozen products, please fill
                        <a href="quote.html">'Get a quote Form'</a> <br />
                        OR alternatively you may reach us at:
                      </strong>
                      <br />
                      Modern Frozen Products
                      <br />
                      (GSTIN 06AGTPB7133Q1ZU)
                      <br />
                      Bindu Gupta
                      <br />
                      <abbr title="Phone">Mobile:</abbr> +91-9815411199
                      (WhatsApp), +91-9779246448
                      <br />
                      <a href="mailto:ashwini.bindu@gmail.com?subject="
                        >E-mail: ashwini.bindu@gmail.com</a
                      >
                    </address>
                    <div
                      class="fb-like"
                      data-href="http://facebook.com/frozengreenpeas"
                      data-layout="standard"
                      data-action="like"
                      data-show-faces="true"
                      data-share="true"
                    ></div>
                    <p>
                      We also have
                      <a href="https://www.indiamart.com/modernfrozenproducts/"
                        >our catalogue of products at India Mart Website.</a
                      >
                    </p>
                    <p>
                      We will get back to you very soon.
                      <br />
                      Thank you for your time and interest!
                      <br />
                    </p>
                    <p>
                      <img
                        src="../../assets/business_card.jpg"
                        style="width: 100%;"
                      />
                    </p>
                  </b-card-text>
                </b-card-body>
              </b-col>
              <b-col md="6">
                <div
                  class="fb-page"
                  data-href="https://www.facebook.com/frozengreenpeas"
                  data-tabs="timeline"
                  data-small-header="false"
                  data-adapt-container-width="true"
                  data-hide-cover="false"
                  data-show-facepile="true"
                >
                  <div class="fb-xfbml-parse-ignore">
                    <blockquote cite="https://www.facebook.com/frozengreenpeas">
                      <a href="https://www.facebook.com/frozengreenpeas"
                        >Frozen Green Peas</a
                      >
                    </blockquote>
                  </div>
                </div>
              </b-col>
            </b-row>
          </b-card>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import NavBar from "../../components/NavBar";

export default {
  name: "App",
  components: {
    NavBar,
  },
};
</script>

<style>
body {
  background-image: url("../../assets/background.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
}
</style>
