import './calculator/form.js'
import './calculator/hasil.js'

Vue.component('calculator-card', {
  template: `
  <div class="card">
    <div class="card-header text-center font-weight-bold border-0 bg-white shadow-sm">
      Hitung Estimasi Biaya dan <br> Penghematan Listrik Anda
    </div>
    <div class="card-body">
      <component :is="component" @changeComponent="changeComponent" />
    </div>
  </div>
  `,
  data: () => ({
    component: 'hasil-calculator'
  }),
  methods: {
    changeComponent(val) {
      this.component = val
    }
  }
})