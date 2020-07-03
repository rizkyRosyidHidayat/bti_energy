import '../component/fixed_header.js'
import '../component/top_header.js'
import '../component/header.js'
import '../component/banner.js'
import '../component/kenapa.js'
import '../component/mengapa.js'
import '../component/tenaga.js'
import '../component/projek.js'
import '../component/mikro_hidro.js'
import '../component/team.js'
import '../component/partner.js'
import '../component/konsultasi.js'
import '../component/footer.js'

const app = new Vue({
    el: '#app'
})

var header = document.querySelector('#header')

window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (window.innerWidth > 1100) {
        if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
            header.style.cssText = "top: 0px"
        } else {
            header.style.cssText = "top: -75px"
        }
    }
}

var swiper_tenaga = new Swiper('.swiper-container-tenaga', {
    autoplay: {
        delay: 5000,
        disableOnInteraction: false
    },
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.nav-right',
        prevEl: '.nav-left',
    }
})

var swiper_team = new Swiper('.swiper-container-team', {
    autoplay: {
        delay: 5000,
        disableOnInteraction: false
    },
    loop: true,
    navigation: {
        nextEl: '.nav-right-team',
        prevEl: '.nav-left-team',
    },
    slidesPerView: 3,
    spaceBetween: 32
})