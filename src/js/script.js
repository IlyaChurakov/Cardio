window.addEventListener("DOMContentLoaded", function() {

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
        modalDescr = document.querySelector('#descr'),
        attention1 = document.querySelector('.attention1'),
        attention2 = document.querySelector('.attention2'),
        attention3 = document.querySelector('.attention3'),
        attention4 = document.querySelector('.attention4'),
        attention5 = document.querySelector('.attention5'),
        attention6 = document.querySelector('.attention6');

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

    btn3.addEventListener('click', (e) => {
        e.preventDefault();
        inputs1.forEach(() => {
            if (inputs1[0].value !== '' && inputs1[1].value !== '' && inputs1[2].value !== '' && inputs1[0].value.length >= 2 && inputs1[0].value.length <= 10 && inputs1[1].value.length >= 17) {
                //сделать тут отправку
        
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

    modalButton.addEventListener('click', (e) => {
        e.preventDefault();
        inputs.forEach(() => {
            if (inputs[0].value !== '' && inputs[1].value !== '' && inputs[2].value !== '' && inputs[0].value.length >= 2 && inputs[0].value.length <= 10 && inputs[1].value.length >= 17) {

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

            
            inputs1.forEach(() => {
    
                inputs1[0].value = '';
                inputs1[1].value = '';
                inputs1[2].value = '';
                inputs1[0].classList.remove('red');
                inputs1[1].classList.remove('red');
                attention1.innerHTML = '';
                attention2.innerHTML = '';
                
            });

            inputs.forEach(() => {

                inputs[0].value = '';
                inputs[1].value = '';
                inputs[2].value = '';
                inputs[0].classList.remove('red');
                inputs[1].classList.remove('red');
                attention3.innerHTML = '';
                attention4.innerHTML = '';
            });

            modal.forEach((item, number) => {
                modal[number].classList.add('modal__hidden');
            });
            overlay.classList.add('overlay__hidden');
            
        });
    });

    //Валидация форм
    
    inputs1.forEach(() => {

        inputs1[0].addEventListener('input', () => {
            if (inputs1[0].value.length < 2 || inputs1[0].value.length > 10) {
                inputs1[0].classList.add('red');
                attention1.innerHTML = 'Введите не менее 2 и не более 10 символов!';
            } else if ( inputs1[0].value.length >= 2 && inputs1[0].value.length <= 10){
                inputs1[0].classList.remove('red');
                attention1.innerHTML = '';
            }
        });

        inputs1[1].addEventListener('input', () => {
            if (inputs1[1].value.length !== 18) {
                inputs1[1].classList.add('red');
                attention2.innerHTML = 'Номер телефона должен состоять из 11 цифр!';
            } else if (inputs1[1].value.length == 18) {
                inputs1[1].classList.remove('red');
                attention2.innerHTML = '';
            }
            // console.log(inputs1[1].value.length);
        });
        
    });

    inputs.forEach(() => {

        inputs[0].addEventListener('input', () => {
            if (inputs[0].value.length < 2 || inputs[0].value.length > 10) {
                inputs[0].classList.add('red');
                attention3.innerHTML = 'Введите не менее 2 и не более 10 символов!';
            } else if ( inputs[0].value.length >= 2 && inputs[0].value.length <= 10){
                inputs[0].classList.remove('red');
                attention3.innerHTML = '';
            }
        });

        inputs[1].addEventListener('input', () => {
            if (inputs[1].value.length < 17) {
                inputs[1].classList.add('red');
                attention4.innerHTML = 'Номер телефона должен состоять из 11 цифр!';
            } else if (inputs[1].value.length >= 17) {
                inputs[1].classList.remove('red');
                attention4.innerHTML = '';
            }
            // console.log(inputs1[1].value.length);
        });
        
    });
    

    //Делаем маску для ввода номера

    function setCursorPosition(pos, elem) {
        elem.focus();
        if (elem.setSelectionRange) {
            elem.setSelectionRange(pos, pos);
        }
        else if (elem.createTextRange) {
            var range = elem.createTextRange();
            range.collapse(true);
            range.moveEnd("character", pos);
            range.moveStart("character", pos);
            range.select();
        }
    }
     
    function mask(event) {
        var matrix = "+7 (___) ___ ____",
            i = 0,
            def = matrix.replace(/\D/g, ""),
            val = this.value.replace(/\D/g, "");
        if (def.length >= val.length) {
            val = def;
        }
        this.value = matrix.replace(/./g, function(a) {
            return /[_\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? "" : a;
        });
        if (event.type == "blur") {
            if (this.value.length == 2) {
                this.value = "";
            }
        } else {
            setCursorPosition(this.value.length, this);
        }  
    }
        var input = document.querySelectorAll(".mask");
        input.forEach((item, num) => {
            input[num].addEventListener("input", mask, false);
            input[num].addEventListener("focus", mask, false);
            input[num].addEventListener("blur", mask, false);
        });
});

    









