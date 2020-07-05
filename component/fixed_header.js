import '../component/other_menu.js'

Vue.component('fixed-header', {
  template: `
    <header id="header" class="fixed-top w-100">      
      <div class="navbar navbar-light navbar-expand-md shadow bg-white">
        <div class="container position-relative align-items-center justify-content-center justify-content-lg-between justify-content-sm-center">
          <a 
            @click="$emit('visibledhiddenmenu', true)"
            href="javascript:void(0)" 
            class="navbar-brand position-absolute d-block d-md-none" style="left: 0;">
            <img src="icon/menu.svg" alt="icon menu">
          </a>

          <a href="index.html" class="navbar-brand">
            <img src="img/logo.png" alt="logo web" height="40">
          </a>

          <div class="navbar-nav align-items-center d-none d-lg-flex">
            <template v-for="item in header">
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
            <other-menu :menu="other"/>
          </div>
        </div>
      </div>
    </header>
  `,
  props: ['header', 'other'],
  methods: {
    selectMenu(menu) {
      const hasil = this.header.map(item => {
        if (item.text === menu) {
          item.active = true
        } else {
          item.active = false
        }
        return item
      })
      this.$emit('selectedMenu', hasil)
    }
  }
})