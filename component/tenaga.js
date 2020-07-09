Vue.component('tenaga-section', {
  template: `
  <section id="tenaga" class="bg-light-orange pb-5">
    <div class="container-lg">
      <div class="py-5">
        <h1 class="font-weight-bold text-orange title text-center">
          Tenaga Surya
        </h1>
        <p class="text-center">
          Instalasi Solar Panel yang kami tawarkan dapat 
          digunakan untuk beberapa tujuan 
        </p>
      </div>
      <div class="row align-items-end">
        <div v-for="item in cols" class="col-12 col-md-4 col-sm-12 mb-3">
          <center>
            <div class="w-75 text-center">
              <img :src="'img/'+item.img" alt="" class="w-75">
              <h5 class="font-weight-bold text-capitalize">{{ item.title }}</h5>
              <p class="my-4">
                {{ item.desc }}
              </p>
              <a :href="item.link" class="btn btn-outline-orange rounded-pill">
                LEARN MORE
              </a>
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
        title: 'Rumah Tangga', 
        desc: `
          Kami menawarkan sistem on grid dimana anda bisa 
          menjual listrik kepada PLN dan mengurangi tagihan
          listrik bulanan anda.
        `,
        img: 'home.png' ,
        link: ''
      },
      { 
        title: 'Industri', 
        desc: `
          Untuk industri atau Perkantoran kami menawarkan
          sistem on grid yang terkoneksi PLN. off-grid dengan baterai untuk backup
          energi, ataupun hybrid kombinasi dari keduanya.
        `,
        img: 'industrial.png' ,
        link: ''
      },
      { 
        title: 'Productive use', 
        desc: `
          Solar Panel juga bisa dgunakan untuk Pompa Air, Penyimpanan Es, ataupun sistam offgrid untuk 
          daerah yang belum terjangkau listrik PLN.
        `,
        img: 'comercil.png' ,
        link: ''
      }
    ]
  })  
})