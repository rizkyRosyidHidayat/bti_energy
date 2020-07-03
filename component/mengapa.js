Vue.component('mengapa-section', {
  template: `
    <section class="bg-light-orange pb-5">
      <div class="container">
        <h1 class="font-weight-bold text-orange title py-5 text-center">
          Mengapa BTI Energy?
        </h1>
        <div class="row">
          <div v-for="item in cols" class="col-4">
            <center>
              <div class="w-75 text-center">
                <img :src="'img/'+item.img" alt="" class="w-75 mb-3">
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
        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Voluptatibus corrupti distinctio id nihil velit rerum placeat.
        `,
        img: 'solar_cell_system.png' 
      },
      { 
        title: 'Skema Cicilan', 
        desc: `
        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Voluptatibus corrupti distinctio id nihil velit rerum placeat.
        `,
        img: 'easy_monitoring.png' 
      },
      { 
        title: 'Konsultasi Gratis', 
        desc: `
        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Voluptatibus corrupti distinctio id nihil velit rerum placeat.
        `,
        img: 'easy_maintenance.png' 
      }
    ]
  })  
})