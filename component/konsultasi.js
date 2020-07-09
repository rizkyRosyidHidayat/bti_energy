Vue.component('konsultasi-section', {
  template: `
  <section id="konsultasi" class="konsultasi pb-0 pt-5 pb-md-5">
    <div class="container-lg">
      <div class="row align-items-center">
        <div class="col-12 col-md-6 text-white mb-5">
          <div class="w-100 w-md-75">
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
                  <input @blur="isEmpty('nama')" @click="emptyValue('nama')" type="text" v-model="dataKonsultasi.nama" class="form-control text-white border-white bg-transparent p-4">
                </div>
                <div class="col-6">
                  <input @blur="isEmpty('email')" @click="emptyValue('email')" type="email" v-model="dataKonsultasi.email" class="form-control text-white border-white bg-transparent p-4">
                </div>
              </div>
              <input @blur="isEmpty('nohp')" @click="emptyValue('nohp')" type="text" v-model="dataKonsultasi.nohp" class="form-control text-white border-white bg-transparent p-4 mb-3">
              <textarea @blur="isEmpty('pesan')" @click="emptyValue('pesan')" v-model="dataKonsultasi.pesan" class="form-control text-white border-white bg-transparent p-4 mb-4"></textarea>
              <button type="submit" class="btn bg-white text-orange">
                KIRIM PESAN
              </button>
            </form>
          </div>
        </div>
        <div class="col-12 col-md-6 py-5 bg-image-konsultasi">
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
  `,
  data: () => ({
    dataKonsultasi: {
      nama: 'Nama',
      email: 'Email',
      nohp: 'Nomor Handphone',
      pesan: 'Pesan'
    },
    label: ''
  }),
  methods: {
    emptyValue(data) {
      this.label = this.dataKonsultasi[data]
      this.dataKonsultasi[data] = ''
    },
    isEmpty(data) {
      if (this.dataKonsultasi[data] === '') {
        this.dataKonsultasi[data] = this.label
      }
    }
  }
})