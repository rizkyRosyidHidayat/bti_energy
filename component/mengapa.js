Vue.component('mengapa-section', {
  template: `
    <section id="why" class="bg-light-orange pb-5">
      <div class="container-lg">
        <h1 class="font-weight-bold text-orange title py-5 text-center">
          Mengapa BTI Energy?
        </h1>
        <div class="row align-items-end">
          <div v-for="item in cols" class="col-12 col-md-4 col-sm-12 mb-3">
            <center>
              <div class="w-75 text-center">
                <img :src="'img/'+item.img" alt="" class="w-75 mb-3">                
              </div>
            </center>
          </div>
        </div>
        <div class="row">
          <div v-for="item in cols" class="col-12 col-md-4 col-sm-12 mb-3">
            <center>
              <div class="w-75 text-center">
                <div class="card border-0 rounded-lg shadow">
                  <div class="card-body">
                    <div class="text-orange h5 font-weight-bold mb-3">
                      {{ item.title }}
                    </div>
                    <p>{{ item.desc }}</p>
                    <div class="btn btn-sm bg-orange rounded-pill px-5"></div>
                  </div>
                </div>
              </div>
            </center>
          </div>
        </div>
      </div>
    </section>
  `,
  data: () => ({
    cols: [
      { 
        title: 'Sistem Leasing / Sewa', 
        desc: `
        Dengan sistem leasing solar panel, anda hanya perlu membayar
        90% dari tagihan listrik bulanan. Dengan opsi buy asset yang fleksibel.
        `,
        img: 'sewa.png' 
      },
      { 
        title: 'Skema Cicilan', 
        desc: `
        Anda juga dapat mencicil investasi pemasangan solar panel dengan bunga 3% 
        dan tenor hingga 5 tahunan.
        `,
        img: 'cicilan.png' 
      },
      { 
        title: 'Konsultasi Gratis', 
        desc: `
        Masih ragu dengan manfaat, paembiayaan, ataupun hal 
        lainnnya? Hubungi kami dan konsultasikan semuanya secara 
        langsung ataupun online. GRATIS !
        `,
        img: 'konsultasi.png' 
      }
    ]
  })  
})