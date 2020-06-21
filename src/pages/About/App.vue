<template>
  <div id="app">
    <NavBar />
    <b-container class="bv-example-row mt-4">
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
                    <div>
                      <h4>
                        Brief Profile of Bindu Gupta
                        <small>(MBA Finance, M.Com)</small>
                      </h4>
                      <p>
                        <ul>
                          <li>
                            She has rich experience of more than Eighteen years in the field of frozen products.
                          </li>
                          <li>
                            She deals in all kinds of frozen products, mainly frozen green peas, sweet corn, baby corn, carrot,
                            cauliflower, broccoli, cut beans, okra, three way and four way mixed vegetable.
                          </li>
                          <li>
                            USP of her business is A+ quality of products, best rates and best service in the industry.
                          </li>
                        </ul>
                      We are a team of high level professionals working in the area of supplying IQF Green Peas/vegetables all over
                      India for more than a decade.
                      </p>
                    </div>
                  </b-card-text>
                </b-card-body>
              </b-col>
              <b-col md="6">
                <Carousel />
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
import Carousel from "../../components/Carousel";

export default {
  name: "App",
  components: {
    NavBar,
    Carousel,
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
