// $(document).ready(function(){
//     $('.carousel__inner').slick({
//         speed: 300,
//         // adaptiveHeight: true,
//         prevArrow: '<button type="button" class="slick-prev"><img src="icons/left.png"></button>',
//         nextArrow: '<button type="button" class="slick-next"><img src="../icons/right.png"></button>',
//         responsive: [
//             {
//                 breakpoint: 992,
//                 settings: {
//                     dots: true,
//                     arrows: false
//                 }
//             }
//             // {
//             //     breakpoint: 991,
//             //     settings: {
//             //         slidesToShow: 1,
//             //         slidesToScroll: 1
//             //     }
//             // },
//             // {
//             //     breakpoint: 767,
//             //     settings: {
//             //         slidesToShow: 1,
//             //         slidesToScroll: 1
//             //     }
//             // },
//             // {
//             //     breakpoint: 575,
//             //     settings: {
//             //         slidesToShow: 1,
//             //         slidesToScroll: 1
//             //     }
//             // }
//             // You can unslick at a given breakpoint now by adding:
//             // settings: "unslick"
//             // instead of a settings object
//           ]
//         });
    
//   });

const slider = tns({
    container: '.carousel__inner',
    items: 1,
    slideBy: 'page',
    autoplay: false,
    controls: false,
    nav: false
});

document.querySelector('.prev').addEventListener('click', () => {
    slider.goTo('prev');
});
document.querySelector('.next').addEventListener('click', () => {
    slider.goTo('next');
});

const descr = document.querySelectorAll('.catalog__wrapper_descr'),
      main = document.querySelectorAll('.catalog__wrapper_main'),
      btn = document.querySelectorAll('.more'),
      tabs = document.querySelectorAll('.catalog__tab'),
      content = document.querySelectorAll('.catalog__content');

btn.forEach((item, n) => {
    btn[n].addEventListener('click', () => {
        btn[n].innerHTML = (btn[n].innerHTML === 'подробнее') ? btn[n].innerHTML = 'назад' : btn[n].innerHTML = 'подробнее';
        main[n].classList.toggle('hidden');
        descr[n].classList.toggle('hidden');
    });
});

tabs.forEach((item, num) => {
    tabs[num].addEventListener('click', () => {
        tabs.forEach((n) => {
            n.classList.remove('active');
        });
        content.forEach((n) => {
            n.classList.remove('visible');
        });
        tabs[num].classList.add('active');
        content[num].classList.add('visible');
    });
});




