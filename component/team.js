Vue.component('team-section', {
  template: `
    <section id="team" class="bg-light-orange pb-5">
      <div class="container-lg">
        <h1 class="font-weight-bold text-orange title py-5 text-center">
          Our Team
        </h1>
        <p class="text-center mb-5">
          Kami didukung oleh tim yang memiliki antusias tinggi untuk membantu
          anda <br> memanfaatkan Energi Terbarukan
        </p>
        <div class="d-flex align-items-center">
          <button class="btn btn-icon bg-orange nav-left-team mr-3 d-none d-md-block">
            <img src="icon/chevron_left.svg" alt="chevron_left">
          </button>

          <div class="swiper-container-team overflow-hidden">
            <div class="swiper-wrapper">
              <div v-for="item in team" class="swiper-slide">
                <div class="card shadow-sm rounded-lg rounded-0">
                  <div class="card-header text-center font-weight-bold border-0 bg-orange text-white text-uppercase">
                    {{ item.posisi }}
                  </div>
                  <div class="card-body">
                    <center>
                      <div class="img-team rounded-circle border-orange mb-3">
                        <img :src="'img/team/'+item.img" alt="img team" class="w-100">
                      </div>
                      <b>{{ item.nama }}</b>
                    </center>
                  </div>
                  <div class="card-footer text-center bg-white">
                    <div class="mb-3">
                      {{ item.pekerjaan }}
                    </div>
                    <a :href="item.link">
                      <img src="icon/linkedin.svg" alt="linkedin" width="30">
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <button class="btn btn-icon bg-orange nav-right-team ml-3 d-none d-md-block">
            <img src="icon/chevron_right.svg" alt="chevron_right">
          </button>
        </div>
      </div>
    </section>
  `,
  data: () => ({
    team: [
      { img: '1.png', posisi: 'advisor', pekerjaan: 'Advisor', link: 'https://id.linkedin.com/in/andhita-mustikaningtyas', nama: 'Andhita Tyas' },
      { img: '2.png', posisi: 'advisor', pekerjaan: 'Advisor', link: 'https://www.linkedin.com/in/cokdes/', nama: 'Cokde Susila' },
      { img: '3.png', posisi: 'advisor', pekerjaan: 'Advisor', link: '', nama: 'A.A. Ngurah Krisna Wisesa' },
      { img: '4.png', posisi: 'advisor', pekerjaan: 'Advisor', link: 'https://id.linkedin.com/in/erlanggabayurp', nama: 'Erlangga Bayu' },
      { img: '5.png', posisi: 'advisor', pekerjaan: 'Advisor', link: ' https://www.linkedin.com/in/imadeaditya', nama: 'I Made Aditya' },
      { img: '6.png', posisi: 'advisor', pekerjaan: 'Advisor', link: 'https://www.linkedin.com/in/muhammad-fahmi-625a4773/', nama: 'Muhammad Fahmi' },
      { img: '7.png', posisi: 'advisor', pekerjaan: 'Advisor', link: '', nama: 'Muhammad Haekal' },
      { img: '8.png', posisi: 'advisor', pekerjaan: 'Advisor', link: ' https://www.linkedin.com/in/naufal-riyandi-b34655118', nama: 'Naufal Riyandi' },
      { img: '9.png', posisi: 'advisor', pekerjaan: 'Advisor', link: '', nama: 'Wahyu Krisna Aji F' }
    ]
  })
})