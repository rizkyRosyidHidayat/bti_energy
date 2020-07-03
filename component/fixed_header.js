Vue.component('fixed-header', {
  template: `
    <header id="header" class="fixed-top w-100">      
      <div class="navbar navbar-light navbar-expand-md shadow bg-white">
        <div class="container align-items-center">
          <a href="index.html" class="navbar-brand">
            <img src="img/logo.png" alt="logo web" height="40">
          </a>

          <div class="navbar-nav align-items-center">
            <template v-for="item in list">
              <a 
                v-if="item.active" 
                href="#" class="nav-item nav-link"
                @click="selectMenu(item.text)">
                <div class="btn btn-sm rounded-pill bg-orange font-weight-bold text-white">
                  {{ item.text }}
                </div>
              </a>
              <a 
                v-else href="#" 
                class="nav-item nav-link text-black-50 font-weight-bold"
                @click="selectMenu(item.text)">
                {{ item.text }}
              </a>
            </template>
          </div>
        </div>
      </div>
    </header>
  `,
  data: () => ({
		list: [
			{ link: '', text: 'OVERVIEW', active: true },
			{ link: '', text: 'WHY ?', active: false },
			{ link: '', text: 'TENAGA SURYA', active: false },
			{ link: '', text: 'MIKRO HIDRO', active: false },
			{ link: '', text: 'OTHER', active: false },
		]
  }),
  methods: {
    selectMenu(menu) {
      this.list = this.list.map(item => {
        if (item.text === menu) {
          item.active = true
        } else {
          item.active = false
        }
        return item
      })
    }
  }
})