Vue.component('hasil-calculator', {
  template: `
    <div class="text-center">
      <b class="text-black-50">Estimasi biaya instalasi</b>
      <div class="text-orange mb-3">dfdfd</div>
      <b class="text-black-50 mb-2">Penghematan tagihan listrik hingga :</b> <br>
      <div class="btn btn-outline-orange rounded-pill mb-3">
        (%) per bulan
      </div> <br>
      <b class="text-black-50">Estimasi biaya instalasi</b>
      <div class="text-orange font-weight-bold mb-3">
        3 Tahun 4 Bulan
      </div>
      <div>Anda membantu mengurangi penggunaan minyak dunia sebesar</div>
      <div class="text-orange mb-3"> toe/tahun</div>
      <div>Anda membantu mengurangi emisi CO2 sebesar</div>
      <div class="text-orange mb-3"> kg/tahun</div>
      <div class="d-flex justify-content-between mb-5">
        <b class="text-black-50">Tertarik</b>
        <a class="btn btn-success" href="https://api.whatsapp.com/send?phone=6281916717995">
          Konsultasi Gratis
        </a>
      </div>
      <button 
        @click="$emit('changeComponent', 'form-calculator')"
        class="btn bg-orange rounded-pill text-white px-4">
        HITUNG KEMBALI
      </button>
    </div>
  `
})