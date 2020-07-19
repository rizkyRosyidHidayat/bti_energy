import './calculator/form.js'
import './calculator/hasil.js'

Vue.component('calculator-card', {
  template: `
  <div class="card">
    <div class="card-header text-center font-weight-bold border-0 bg-white shadow-sm">
      Hitung Estimasi Biaya dan <br> Penghematan Listrik Anda
    </div>
    <div class="card-body">
      <component :data="dataHasil" :is="component" @sendData="sendData" />
    </div>
  </div>
  `,
  data: () => ({
    component: 'form-calculator',
    dataHasil: ''
  }),
  methods: {
    sendData(val) {
      this.component = val.component
      this.dataHasil = val.data
    }
  }
})