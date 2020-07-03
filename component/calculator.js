Vue.component('calculator-card', {
  template: `
  <div class="card">
    <div class="card-header text-center font-weight-bold border-0 bg-white shadow-sm">
      Hitung Estimasi Biaya dan Penghematan Listrik Anda
    </div>
    <div class="card-body">
      <form action="">
        <label for="">Kapasitas Listrik Terpasang</label>
        <div class="input-group mb-3">
          <input type="text" class="form-control bg-light border-0" value="Masukan daya listrik terpasang" readonly>
          <div class="input-group-append">
            <span class="input-group-text bg-light border-0">
              <img src="icon/chevron-down.svg" alt="chevron-down">
            </span>
          </div>
        </div>
        <label for="">Tagihan Listrik Bulanan</label>
        <input type="number" class="form-control bg-light border-0 mb-3" placeholder="Rp. 500.000">
        <label for="">Presentase yang ingin dipasang (%)</label>
        <div class="input-group mb-3">
          <input type="text" class="form-control bg-light border-0" value="0% - 100%" readonly>
          <div class="input-group-append">
            <span class="input-group-text bg-light border-0">
              <img src="icon/chevron-down.svg" alt="chevron-down">
            </span>
          </div>
        </div>
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
  `
})