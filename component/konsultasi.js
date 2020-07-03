Vue.component('konsultasi-section', {
  template: `
  <section class="konsultasi py-5">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-6 text-white">
          <div class="w-75">
            <blockquote class="blockquote">
              <footer class="blockquote-footer text-white">KAMI SIAP MEMBANTU</footer>
            </blockquote>
            <h3>Konsultasi <b>GRATIS</b></h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Enim expedita exercitationem tempore perferendis possimus 
              quasi quisquam et itaque perspiciatis!
            </p>
            <form action="" class="form-kosultasi">
              <div class="row mb-3">
                <div class="col-6">
                  <input type="text" placeholder="Nama" class="form-control text-white border-white bg-transparent p-4">
                </div>
                <div class="col-6">
                  <input type="email" placeholder="Email" class="form-control text-white border-white bg-transparent p-4">
                </div>
              </div>
              <input type="number" placeholder="Nomor Handphone" class="form-control text-white border-white bg-transparent p-4 mb-3">
              <textarea placeholder="Pesan" class="form-control text-white border-white bg-transparent p-4 mb-4"></textarea>
              <button type="submit" class="btn bg-white text-orange">
                KIRIM PESAN
              </button>
            </form>
          </div>
        </div>
        <div class="col-6">
          <div class="text-center text-white text-uppercase">
            <p>silahkan hubungi kami kapanpun untuk berdiskusi</p>
            <p class="font-weight-bold">konsultasi gratis</p>
            <img src="img/logo_single.png" alt="logo text" width="150"> <br>
            <a href="#" class="btn btn-success border-white mt-3">
              HUBUNGI KAMI
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
  `
})