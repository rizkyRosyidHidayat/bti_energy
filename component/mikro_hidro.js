Vue.component('mikro-hidro', {
  template: `
    <section id="mikro_hidro" class="bg-light-orange pb-5">
      <div class="container-lg">
        <div class="margin-section">
          <h1 class="font-weight-bold text-orange mb-3 text-center">
            Tenaga Mikro Hidro
          </h1>
          <center><div class="title-border-bottom"></div></center>
        </div>
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
                  class="btn btn-outline-orange rounded-pill"
                  target="_blank">
                  DOWNLOAD PROPOSAL
                </a>                
              </div>
              <div class="col-12 col-md-6 order-1 order-md-2">
                <div class="d-flex justify-content-end mb-3">
                  <img :src="'img/'+item.img" alt="gambar tenaga mikro" class="w-100 w-md-75" style="border-radius: 15px;">
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
        Dengan teknologi turbin Turbulent dari Belgia, 
        kami dapat membantu anda menghasilkan energi terbarukan 
        dari tenaga mikrohidro (sungai atau kanal) secara fleksibel 
        dan biaya produksi listrik 
        per kWh sangat rendah. Di Indonesia telah terpasang 13 kW 
        plant di Green School, Bali
        `,
        img: 'project.png',
        link: ''
      }
    ]
  })
})