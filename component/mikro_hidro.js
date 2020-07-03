Vue.component('mikro-hidro', {
  template: `
    <section class="bg-light-orange pb-5">
      <div class="container">
        <h1 class="font-weight-bold text-orange title py-5 text-center">
          Tenaga Mikro Hidro
        </h1>
        <div class="d-flex align-items-center">
          <button class="btn btn-icon bg-orange nav-left mr-3">
            <img src="icon/chevron_left.svg" alt="chevron_left">
          </button>
          
          <div class="swiper-container-tenaga overflow-hidden">
            <div class="swiper-wrapper">
              <div v-for="item in tenaga" class="swiper-slide d-flex align-items-center">
                <div class="col-6">
                  <h3>{{ item.title }}</h3>
                  <p class="text-justify  my-4">
                    {{ item.desc }}
                  </p>
                  <div class="d-flex">
                    <a :href="item.link" class="btn btn-outline-orange rounded-pill border-0">
                      DOWNLOAD PROPOSAL
                    </a>
                    <a href="#" class="btn btn-outline-orange rounded-pill ml-3">
                      Lihat Lainnya
                    </a>
                  </div>
                </div>
                <div class="col-6">
                  <div class="d-flex justify-content-end">
                    <img :src="'img/project/'+item.img" alt="gambar tenaga mikro" class="w-75 rounded-lg">
                  </div>
                </div>
              </div>
            </div>
          </div>

          <button class="btn btn-icon bg-orange nav-right ml-3">
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