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
      <b-row align-h="center" class="mt-2">
        <b-col>
          <b-card no-body class="overflow-hidden">
            <b-row no-gutters>
              <b-col md="6">
                <b-card-body title="Horizontal Card">
                  <b-card-text>
                    <div>
                      <p>
                        We offer A Plus Grade frozen green peas, sweet corn,
                        baby corn, carrot, cauliflower, broccoli, cut beans,
                        okra, three way and four way mixed vegetable at best
                        competitive rates.
                      </p>
                      <p>
                        Quotation on request.
                      </p>
                      <p>
                        Packings Available 30 kg, 5 kg, 1kg, 500 gms and 200
                        gms.
                      </p>
                      <p>
                        Payment 100% advance. Supply Pan India.
                      </p>

                      <address>
                        <strong
                          >For any query regarding frozen products, please fill
                          <a href="quote.html">'Get a quote Form'</a> or
                          contact:
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
                      <p>
                        We also have
                        <a
                          href="https://www.indiamart.com/modernfrozenproducts/"
                          >our catalogue of products at India Mart Website.</a
                        >
                      </p>
                      <p>
                        We will get back to you very soon.
                        <br />
                        Thank you for your time and interest!
                        <br />
                      </p>
                    </div>
                  </b-card-text>
                </b-card-body>
              </b-col>
              <b-col md="6">
                <b-card-img
                  src="https://picsum.photos/400/400/?image=20"
                  alt="Image"
                  class="rounded-0"
                ></b-card-img>
              </b-col>
            </b-row>
          </b-card>
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
