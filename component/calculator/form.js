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
      <input type="number" v-model="calc.tagihan" required class="form-control bg-light border-0 mb-3" placeholder="Rp. 500.000">
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
      { text: '450 VA', value: 450 },
      { text: '900 VA', value: 900 },
      { text: '1300 VA', value: 1300 },
      { text: '2200 VA', value: 2200 },
      { text: '3500 VA', value: 3500 }
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
  computed: {
    tagihan: {
      set(val) {
        this.calc.tagihan = val
      },
      get() {
        return Intl.NumberFormat('id-ID', { maximumSignificantDigits: 4, style: 'currency', currency: 'IDR' }).format(this.calc.tagihan)
      }
    }
  },
  methods: {
    calculate() {
      let tarif = 0
      if (this.calc.daya > 1300) 
        tarif = 1467.28
      else 
        tarif = 1352
      
      const x = this.calc.tagihan
      const y = x/tarif
      const z = this.calc.presentase * 0.01
      // step 1 menghitung total PV installed
      const p = 1.3 * y * z / 30 //kWh/day
      const q = p * 1000 / 3.919 //Wp
      // step 2 menghitung total harga komponen PV
      const r = q / 250 // buah PV (r = roundup)
      const s = Math.ceil(r) * 2175000 /*harga PV*/ //IDR
      const t = 5650000 // harga inverter
      const u = 5000000 // harga komponen + jasa
      const total_minimum = s+t+u //Harga total
      const total_maksimal = total_minimum + 5000000
      const b = p*30*tarif //convert to IDR
      const d = total_minimum/b //balik modal
      const ktoe = p*365*8.59*0.001 //convert to ktoe
      const reduceCO2 = p*365*0.283 //convert to kg co2 emission
      const tahun = Math.ceil(d) / 12
      const bulan = Math.ceil(d) % 12
      // alert(total_minimum)
      this.$emit('sendData', {
        component: 'hasil-calculator',
        data: {
          biaya_minimum: total_minimum,
          biaya_maksimal: total_maksimal,
          hemat: b,
          investasi: `${Math.floor(tahun)} tahun ${bulan} bulan`,
          ktoe: ktoe.toFixed(2),
          reduceCO2: reduceCO2.toFixed(2)
        }
      })
    }
  }
})