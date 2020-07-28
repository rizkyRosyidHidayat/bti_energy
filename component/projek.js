Vue.component('projek-section', {
  template: `
    <section id="projek" class="bg-light-orange pb-5 pt-5">
      <div class="container-lg">
        <div class="row">
          <div v-for="item in cols" class="col-12 col-md-6 col-sm-12 mb-3">
            <center>
              <div class="w-100 w-lg-75">
                <div class="mb-3 rounded-lg">
                  <img :src="'img/project/'+item.img" alt="" class="w-100">
                </div>
                <p class="text-center h5">
                  {{ item.text }}
                </p>
              </div>
            </center>
          </div>
        </div>
      </div>
    </section>
  `,
  data: () => ({
    cols: [
      { img: '1.svg', text: 'Denpasar - 2,8 kWp Hybrid Solar PV System' },
      { img: '2.svg', text: 'Ubung - 2,4 kWp On Grid Solar PV System' },
      { img: '3.svg', text: 'SPBU, Jakarta - 20 kWp On Grid Solar PV System' },
      { img: '4.svg', text: 'Denpasar - 2,4 kWp On Grid Solar PV System' }
    ]
  })
})