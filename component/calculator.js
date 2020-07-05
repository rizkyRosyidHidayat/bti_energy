import '../component/dropdown_menu.js'

Vue.component('calculator-card', {
  template: `
  <div class="card">
    <div class="card-header text-center font-weight-bold border-0 bg-white shadow-sm">
      Hitung Estimasi Biaya dan Penghematan Listrik Anda
    </div>
    <div class="card-body">
      <form action="">
        <label for="">Kapasitas Listrik Terpasang</label>
        <dropdown-menu 
          :menu="dayaListrik"
          placeholder="Masukan daya listrik terpasang"
          v-model="calc.daya"
        ></dropdown-menu>
        <label for="">Tagihan Listrik Bulanan</label>
        <input type="number" class="form-control bg-light border-0 mb-3" placeholder="Rp. 500.000">
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
        <button class="btn bg-orange text-white btn-lg px-4 font-weight-bold">
          HITUNG
        </button>
      </form>
    </div>
  </div>
  `,
  data: () => ({
    dayaListrik: [
      { text: '350 V', value: 350 }
    ],
    presentase: [
      { text: '20%', value: 20 }
    ],
    calc: {
      daya: 0,
      presentase: 0
    }
  })
})