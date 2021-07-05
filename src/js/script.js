
//Слайдер

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

// Работы с табами

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

//Модальные окна

const modal = document.querySelectorAll('.modal'),
      overlay = document.querySelector('.overlay'),
      closes = document.querySelectorAll('.modal__close'),
      btn1 = document.querySelector('.button'),
      btn2 = document.querySelector('.button_main'),
      btn3 = document.querySelector('.button_consult'),
      btn4 = document.querySelectorAll('.button_mini'),
      inputs1 = document.querySelectorAll('.modal__inputs1'),
      inputs = document.querySelectorAll('.modal__input'),
      modalButton = document.querySelector('#modal__btn'),
      inputs2 = document.querySelectorAll('.modal__input2'),
      modalButton2 = document.querySelector('#modal__btn2'),
      titleName = document.querySelectorAll('.title-name'),
      modalDescr = document.querySelector('#descr');

      console.log(modalDescr);

btn1.addEventListener('click', () => {
    overlay.classList.remove('overlay__hidden');
    modal.forEach(() => {
        modal[0].classList.remove('modal__hidden');
    });
});

btn2.addEventListener('click', () => {
        overlay.classList.remove('overlay__hidden');
        modal.forEach(() => {
            modal[0].classList.remove('modal__hidden');
        });
});

btn3.addEventListener('click', () => {
    inputs1.forEach(() => {
        if (inputs1[0].value !== '' && inputs1[1].value !== '' && inputs1[2].value !== '') {

            //сделать тут отправку
    
            inputs1[0].value = '';
            inputs1[1].value = '';
            inputs1[2].value = '';
    
            overlay.classList.remove('overlay__hidden');
            modal.forEach(() => {
                modal[2].classList.remove('modal__hidden');
            });
        }
    });
    
});

btn4.forEach((item, num) => {
    btn4[num].addEventListener('click', () => {

        titleName.forEach(() => {
            modalDescr.innerHTML = `${titleName[num].innerHTML}`;
        });

        console.log(titleName[num]);

        overlay.classList.remove('overlay__hidden');
        modal.forEach(() => {
            modal[1].classList.remove('modal__hidden');
        });
    });
});

modalButton.addEventListener('click', () => {
    inputs.forEach(() => {
        if (inputs[0].value !== '' && inputs[1].value !== '' && inputs[2].value !== '') {

            //сделать тут отправку

            inputs[0].value = '';
            inputs[1].value = '';
            inputs[2].value = '';

            modal.forEach(() => {
                modal[0].classList.add('modal__hidden');
                modal[2].classList.remove('modal__hidden');
            });
        }
    });
});

modalButton2.addEventListener('click', () => {
    inputs2.forEach(() => {
        if (inputs2[0].value !== '' && inputs2[1].value !== '' && inputs2[2].value !== '') {

            //сделать тут отправку

            inputs2[0].value = '';
            inputs2[1].value = '';
            inputs2[2].value = '';

            modal.forEach(() => {
                modal[1].classList.add('modal__hidden');
                modal[2].classList.remove('modal__hidden');
            });
            
        }
    });
});

closes.forEach((i, n) => {
    closes[n].addEventListener('click', () => {
        modal.forEach((item, number) => {
            modal[number].classList.add('modal__hidden');
        });
        overlay.classList.add('overlay__hidden');
    });
});









