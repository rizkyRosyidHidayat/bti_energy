Vue.component('mikro-hidro', {
  template: `
    <section id="mikro_hidro" class="bg-light-orange pb-5">
      <div class="container-lg">
        <h1 class="font-weight-bold text-orange title py-5 text-center">
          Tenaga Mikro Hidro
        </h1>
        <div class="swiper-container-tenaga overflow-hidden">
          <div class="swiper-wrapper">
            <div v-for="item in tenaga" class="swiper-slide d-flex flex-column flex-md-row align-items-center">
              <div class="col-12 col-md-6 order-2 order-md-1">
                <h3>{{ item.title }}</h3>
                <p class="text-justify  my-4">
                  {{ item.desc }}
                </p>                
                <a 
                  href="https://drive.google.com/drive/folders/1usxhwGqmQ_DHllvQ9F6L4nyBCoT0w2d3" 
                  @click="download" class="btn btn-outline-orange rounded-pill"
                  target="_blank">
                  DOWNLOAD PROPOSAL
                </a>                
              </div>
              <div class="col-12 col-md-6 order-1 order-md-2">
                <div class="d-flex justify-content-end mb-3">
                  <img :src="'img/project/'+item.img" alt="gambar tenaga mikro" class="w-100 w-md-75 rounded-lg">
                </div>
              </div>
            </div>
          </div>
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
      }
    ]
  })
})