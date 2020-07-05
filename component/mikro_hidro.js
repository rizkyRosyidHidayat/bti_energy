Vue.component('mikro-hidro', {
  template: `
    <section id="mikro_hidro" class="bg-light-orange pb-5">
      <div class="container-lg">
        <h1 class="font-weight-bold text-orange title py-5 text-center">
          Tenaga Mikro Hidro
        </h1>
        <div class="d-flex align-items-center">
          <button class="btn btn-icon bg-orange nav-left mr-3 d-none d-md-block">
            <img src="icon/chevron_left.svg" alt="chevron_left">
          </button>
          
          <div class="swiper-container-tenaga overflow-hidden">
            <div class="swiper-wrapper">
              <div v-for="item in tenaga" class="swiper-slide d-flex flex-column flex-md-row align-items-center">
                <div class="col-12 col-md-6 order-2 order-md-1">
                  <h3>{{ item.title }}</h3>
                  <p class="text-justify  my-4">
                    {{ item.desc }}
                  </p>
                  <div class="d-flex justify-content-center justify-content-md-start">
                    <a :href="item.link" class="btn btn-outline-orange rounded-pill border-0">
                      DOWNLOAD PROPOSAL
                    </a>
                    <a href="#" class="btn btn-outline-orange rounded-pill ml-3 d-none d-md-block">
                      Lihat Lainnya
                    </a>
                  </div>
                </div>
                <div class="col-12 col-md-6 order-1 order-md-2">
                  <div class="d-flex justify-content-end mb-3">
                    <img :src="'img/project/'+item.img" alt="gambar tenaga mikro" class="w-100 w-md-75 rounded-lg">
                  </div>
                </div>
              </div>
            </div>
          </div>

          <button class="btn btn-icon bg-orange nav-right ml-3 d-none d-md-block">
            <img src="icon/chevron_right.svg" alt="chevron_right">
          </button>
        </div>
      </div>
    </section>
  `,
  data: () => ({
    tenaga: [
      {
        title: 'Turbulent Vortex Turbine',
        desc: `
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
        Deserunt ex praesentium esse, laborum, nulla, consequuntur 
        corporis totam obcaecati expedita commodi inventore! 
        Optio unde doloremque tempore accusantium et, fugiat laboriosam adipisci?
        `,
        img: '1.png',
        link: ''
      },
      {
        title: 'Turbulent Vortex Turbine',
        desc: `
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
        Deserunt ex praesentium esse, laborum, nulla, consequuntur 
        corporis totam obcaecati expedita commodi inventore! 
        Optio unde doloremque tempore accusantium et, fugiat laboriosam adipisci?
        `,
        img: '1.png',
        link: ''
      },
      {
        title: 'Turbulent Vortex Turbine',
        desc: `
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
        Deserunt ex praesentium esse, laborum, nulla, consequuntur 
        corporis totam obcaecati expedita commodi inventore! 
        Optio unde doloremque tempore accusantium et, fugiat laboriosam adipisci?
        `,
        img: '1.png',
        link: ''
      }
    ]
  })
})