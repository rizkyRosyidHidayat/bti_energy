Vue.component('footer-section', {
  template:`
    <footer id="footer">
      <div class="footer-container py-5">
        <div class="container-lg">
          <img src="img/logo.png" alt="logo" height="40">
          <div class="row mt-4">
            <div class="col-lg-3 col-md-6 col-sm-12">
              <b>Address</b>
              <p>
                Jakarta Office: Jl. Kamal Raya, Jaya 8 No.6, 
                RT.7/RW.9, Cengkareng <br><br>
                Bandung Office : Jalan Kebun Bibit Barat 
                No.29, Bandung Wetan, Kota Bandung<br><br>
                Bali Office : Jalan Gatot Subroto No. 204, 
                Tonja, Kota Denpasar
              </p>
            </div>
            <div class="col-lg-3 col-md-6 col-sm-12 d-flex justify-content-start justify-content-sm-center">
              <div>
                <b>Services</b>
                <p>
                  <a 
                    v-for="item in services" :key="item.text"
                    :href="item.link"
                    class="d-block mb-1" style="color: #000;">
                    {{ item.text }}
                  </a>
                </p>
              </div>
            </div>
            <div class="col-lg-3 col-md-6 col-sm-12 mb-3">
              <b>Get in Touch</b>
              <div> www.BTIEnergy.com </div>
              <div>
                +62 81 916 717995
              </div>
            </div>
            <div class="col-lg-3 col-md-6 col-sm-12">
              <b>We Support</b>
              <p>
                <img
                  src="./img/bank.png" 
                  alt="bank" 
                  class="img-fluid"
                />
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="footer bg-orange text-white py-2 text-center">
        Copyright 2020 PT. BTIEnergy Indonesia
      </div>
    </footer>
  `,
  data: () => ({
		services: [
			{ text: 'Tenaga Surya', link: '' },
			{ text: 'Mikrohidro', link: '' },
			{ text: 'Technology', link: '' },
			{ text: 'Term & Conditions', link: '' },
			{ text: 'Privacy', link: '' }
		],
	})
})