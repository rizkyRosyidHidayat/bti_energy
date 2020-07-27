Vue.component('hidden-menu', {
  template: `
    <nav 
      class="hidden-menu nav flex-column fixed-top w-75 shadow bg-white"
      :class="{'active': visible}">
      <div class="nav-link">
        <img src="img/logo.png" alt="logo web" height="30">
      </div>
      <div class="nav-link d-flex flex-column justify-content-sm-between">
        <div class="mb-3 mr-sm-3">
          <img src="icon/marker.svg" alt="marker" height="25">
          <span>INDONESIA</span>
        </div>
        <div>
          <img src="icon/phone.svg" alt="phone" height="25">
          <span>+62 8191 6717 995</span>
        </div>
      </div>
      <a 
        v-for="item in menu"
        class="nav-link text-black-50 font-weight-bold" 
        :href="item.link">
        {{item.text}}
      </a>
    </nav>
  `,
  props: ['menu', 'visible']
})