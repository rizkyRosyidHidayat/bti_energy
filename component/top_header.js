Vue.component('top-header', {
  template: `
    <div class="top-header d-none d-lg-block">
      <div class="navbar navbar-light navbar-expand-md">
        <div class="container align-items-center">
          <div class="navbar-nav">
            <div class="navbar-item mr-3">
              Our Contribution:
            </div>
            <div class="navbar-item mr-3">
              <img src="icon/lighting.svg" alt="lighting" height="25">
              <span>80.32 Mhw</span>
            </div>
            <div class="navbar-item">
              <span>CO2 Avoided: 70.4 Kg</span>
              <img src="icon/lighting.svg" alt="lighting" height="25">
            </div>
          </div>

          <div class="navbar-nav">
            <div class="navbar-item mr-3">
              <img src="icon/marker.svg" alt="marker" height="25">
              <span>INDONESIA</span>
            </div>
            <div class="navbar-item">
              <img src="icon/phone.svg" alt="phone" height="25">
              <span>+62 8191 6717 995</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  `
})