Vue.component('other-menu', {
  template: `
  <div class="dropdown">
    <a 
      href="javascript:void(0)" 
      @click="visible = !visible"
      class="nav-item nav-link text-black-50 font-weight-bold">
      OTHER
      <img src="icon/chevron-down.svg" alt="chevron_down" class="ml-2" />
    </a>
    <div 
      v-if="visible"
      class="dropdown-menu dropdown-menu-right d-block">
      <a 
        v-for="item in menu" 
        @click="visible = false"
        :href="item.link"
        class="dropdown-item">
        {{ item.text }}
      </a>
    </div>
  </div>
  `,
  props: ['menu'],
  data: () => ({
    visible: false,    
  }),
  methods: {
    handleClickOutside(evt) {
      if (!this.$el.contains(evt.target)) {
        this.visible = false;
      }
    }
  },
  mounted() {
    document.addEventListener('click', this.handleClickOutside);
  },
  destroyed() {
    document.removeEventListener('click', this.handleClickOutside);
  },
})