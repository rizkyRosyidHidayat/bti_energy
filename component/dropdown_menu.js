Vue.component('dropdown-menu', {
  template: `
  <div class="dropdown">
    <div class="input-group mb-3">
      <input 
        type="text" 
        :placeholder="placeholder" 
        v-model="text" 
        class="form-control bg-light border-0" 
        readonly
        @click="visible = !visible"
      />
      <div class="input-group-append">
        <span class="input-group-text bg-light border-0">
          <img src="icon/chevron-down.svg" alt="chevron-down">
        </span>
      </div>
    </div>
    <div 
      v-if="visible"
      class="dropdown-menu d-block w-100">
      <div 
        v-for="item in menu" 
        @click="selectedValue = item.value;text = item.text"
        class="dropdown-item">
        {{ item.text }}
      </div>
    </div>
  </div>
  `,
  model: {
    prop: 'selectedValue',
    event: 'input'
  },
  props: ['menu', 'placeholder'],
  data: () => ({
    selectedValue: '',
    text: '',
    visible: false
  }),
  watch: {
    selectedValue(val) {
      this.$emit('input', val)
      this.visible = false
    }
  },
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