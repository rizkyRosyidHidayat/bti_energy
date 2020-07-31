import '../dropdown_menu.js'

Vue.component('form-calculator', {
  template: `
    <form @submit.prevent="calculate"  name="submit-to-google-sheet">
      <label for="">Kapasitas Listrik Terpasang</label>
      <dropdown-menu 
        :menu="dayaListrik"
        placeholder="Masukan daya listrik terpasang"
        v-model="calc.daya"
      ></dropdown-menu>
      <label for="">Tagihan Listrik Bulanan</label>
      <input type="text" v-model="calc.tagihan" @blur="convert" @focus="returnInt" required class="form-control bg-light border-0 mb-3" placeholder="Rp. 500.000">
      <label for="">Presentase yang ingin dipasang (%)</label>
      <dropdown-menu 
        :menu="presentase"
        placeholder="0% - 100%"
        v-model="calc.presentase"
      ></dropdown-menu>
      <label for="">Email</label>
      <input type="email" name="email" class="form-control bg-light border-0 mb-3" placeholder="*bti@gmail.com">
      <label for="">No Telp (optional)</label>
      <input type="number" name="nohp" class="form-control bg-light border-0 mb-3" placeholder="+628*********">
      <label for="">Domisili</label>
      <input type="text" name="domisili" class="form-control bg-light border-0 mb-4" placeholder="*Jakarta">
      <button type="submit" class="btn bg-orange text-white btn-lg px-4 font-weight-bold">
      <div v-if="isLoading" class="spinner-border text-light" role="status">
        <span class="sr-only">Loading...</span>
      </div>
        <span v-else>HITUNG</span>
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
      tagihan: null
    },
    isLoading: false,
    tagihan: 0
  }),
  filters: {
    currency: function (val) {
      return parseFloat(val).toFixed(0).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");          
    }
  },
  methods: {
    convert() {
      this.tagihan = this.calc.tagihan
      this.calc.tagihan = Intl.NumberFormat('id-ID', { maximumSignificantDigits: 7, style: 'currency', currency: 'IDR' }).format(this.calc.tagihan)
    },
    returnInt() {
      if (this.calc.tagihan !== null) {
        this.calc.tagihan = this.tagihan
      }
    },
    calculate() {
      let tarif = 0
      if (this.calc.daya > 1300) 
        tarif = 1467.28
      else 
        tarif = 1352
      
      const x = parseInt(this.tagihan)
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
      const scriptURL = 'https://script.google.com/macros/s/AKfycbwN0b3lPPg2aQ5SKuL707MB6rqTb-EEgVeUuFsyJc2J3A7SNtPh/exec'
      const form = document.forms['submit-to-google-sheet']
      this.isLoading = true
      fetch(scriptURL, { method: 'POST', body: new FormData(form)})
        .then(() => {
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
          this.isLoading = false
        })
        .catch(() => {
          alert('Proses gagal coba diulangi kembali')
          this.isLoading = false
        })
    }
  }
})