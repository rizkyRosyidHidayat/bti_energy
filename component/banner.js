import '../component/calculator.js'

Vue.component('banner-section', {
  template: `
    <section id="home" class="banner py-5">
      <div class="container-lg">
        <div class="row">
          <div class="col-md-6 col-sm-12 order-2 order-md-1 order-sm-2">            
            <calculator-card></calculator-card>
          </div>
          <div class="col-md-6 col-sm-12 order-1 order-md-2 order-sm-1">
            <h1 class="font-weight-bold mb-4">
              <span class="text-white">Hemat Tagihan Listrik Sayangi Lingkungan bersama</span>
              <span>BTI</span>
              <span class="text-warning">Energy</span>
            </h1>
            <p class="text-white">
              Hemat energi dari sekarang demi masa depan yang terang.
            </p>
          </div>
        </div>
      </div>
    </section>
  `
})