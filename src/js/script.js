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
    nav: false,
    responsive: {
        768: {
          
        }
      }
});

document.querySelector('.prev').addEventListener('click', () => {
    slider.goTo('prev');
});
document.querySelector('.next').addEventListener('click', () => {
    slider.goTo('next');
});