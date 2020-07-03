Vue.component('projek-section', {
  template: `
    <section class="bg-light-orange pb-5">
      <div class="container">
        <div class="row">
          <div v-for="item in cols" class="col-6 mb-3">
            <center>
              <div class="w-75">
                <div class="mb-3 border-orange rounded-lg">
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
      { img: '1.png', text: 'Lorem ipsum dolor sit amet verdinando' },
      { img: '2.png', text: 'Lorem ipsum dolor sit amet verdinando' },
      { img: '3.png', text: 'Lorem ipsum dolor sit amet verdinando' },
      { img: '1.png', text: 'Lorem ipsum dolor sit amet verdinando' }
    ]
  })
})