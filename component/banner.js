import '../component/calculator.js'

Vue.component('banner-section', {
  template: `
    <section class="banner py-5">
      <div class="container">
        <div class="row">
          <div class="col-6">
            <calculator-card></calculator-card>
          </div>
          <div class="col-6">
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