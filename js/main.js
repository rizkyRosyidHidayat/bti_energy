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
import '../component/hidden_menu.js'

const app = new Vue({
    el: '#app',
    data: {
        header: [
			{ link: '#home', text: 'OVERVIEW', active: true },
			{ link: '#why', text: 'WHY ?', active: false },
			{ link: '#tenaga', text: 'TENAGA SURYA', active: false },
			{ link: '#mikro_hidro', text: 'MIKRO HIDRO', active: false }
        ],
        other: [
            { text: 'PROJECT', link: '#projek' },
            { text: 'CONSULTATION', link: '#konsultasi' },
            { text: 'OUR TEAM', link: '#team' },
            { text: 'OUR PARTNERS', link: '#partner' }
        ],
        visibleHiddenMenu: false
    },
    computed: {
        hiddenMenu() {
            return this.header.concat(this.other)
        }
    },
    methods: {
        selectedMenu(val) {
            this.header = val
        },
        visibledhiddenmenu(val) {
            this.visibleHiddenMenu = val
        }
    }
})

var header = document.querySelector('#header')

window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        header.style.cssText = "top: 0px"
    } else {
        header.style.cssText = "top: -90px"
    }    
}

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
    spaceBetween: 32,
    breakpoints: {
        500: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 40,
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 50,
        },
    }
})