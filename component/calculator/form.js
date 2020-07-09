import '../dropdown_menu.js'

Vue.component('form-calculator', {
  template: `
    <form @submit.prevent="calculate">
      <label for="">Kapasitas Listrik Terpasang</label>
      <dropdown-menu 
        :menu="dayaListrik"
        placeholder="Masukan daya listrik terpasang"
        v-model="calc.daya"
      ></dropdown-menu>
      <label for="">Tagihan Listrik Bulanan</label>
      <input type="number" v-model="tagihan" required class="form-control bg-light border-0 mb-3" placeholder="Rp. 500.000">
      <label for="">Presentase yang ingin dipasang (%)</label>
      <dropdown-menu 
        :menu="presentase"
        placeholder="0% - 100%"
        v-model="calc.presentase"
      ></dropdown-menu>
      <label for="">Email</label>
      <input type="email" class="form-control bg-light border-0 mb-3" placeholder="*bti@gmail.com">
      <label for="">No Telp (optional)</label>
      <input type="number" class="form-control bg-light border-0 mb-3" placeholder="+628*********">
      <label for="">Domisili</label>
      <input type="text" class="form-control bg-light border-0 mb-4" placeholder="*Jakarta">
      <button type="submit" class="btn bg-orange text-white btn-lg px-4 font-weight-bold">
        HITUNG
      </button>
    </form>
  `,
  data: () => ({
    dayaListrik: [
      { text: '450 V', value: 450 },
      { text: '900 V', value: 900 },
      { text: '1300 V', value: 1300 },
      { text: '2200 V', value: 2200 },
      { text: '3500 V', value: 3500 }
    ],
    presentase: [
      { text: '25%', value: 25 },
      { text: '50%', value: 50 },
      { text: '75%', value: 75 },
      { text: '90%', value: 90 },
      { text: '100%', value: 100 }
    ],
    calc: {
      daya: 0,
      presentase: 0,
      tagihan: 0
    }
  }),
  methods: {
    calculate() {
      let y = 0
      if (this.calc.daya > 1300) 
        y = 1467.28
      else 
        y = 1352
      
      const x = this.calc.tagihan
      const z = this.calc.presentase
      // step 1 menghitung total PV installed
      const p = 1.3 * y * z / 30 //kWh/day
      const q = p * 1000 / 3.919 //Wp
      // step 2 menghitung total harga komponen PV
      const r = q / 250 // buah PV
      const s = r * 100 /*harga PV ?*/ //IDR
       
    }
  }
})