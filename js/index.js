const items = document.querySelectorAll('.item');
const goods = document.querySelectorAll('.good');
const likes = document.querySelectorAll('.good__likes');
const burgerButton = document.querySelector('.burger-mob');
const footerList = document.querySelectorAll('.footer__mob-container');
const selectProperties = document.querySelectorAll('.dop-dop');
const hideProperties = document.querySelectorAll('.main__general__item');

//Функция, открывающая выпадающий список
const dropDownList = (list, toOpen, arrow) => {
    list.addEventListener('click', () => {
        toOpen.classList.toggle('hidden');
        if (arrow.classList.contains('arrow-top')) {
            arrow.classList.remove('arrow-top');
            arrow.classList.add('arrow-down');
        } else {
            arrow.classList.add('arrow-top');
            arrow.classList.remove('arrow-down');
        }
    })
}

//Смена цветв "лайков"
likes.forEach((like) => {
    like.addEventListener('click', () => {
        const hearts = like.querySelectorAll('.heart');
        hearts.forEach((heart) => {
            heart.classList.toggle('hidden');
        })
    })
})

//Смена цвета заголовка в items
items.forEach((item) => {
    const itemHeader = item.querySelector('.change-color');
    item.addEventListener('mouseover', () => {
        itemHeader.style.color = '#1C62CD';
    })
    item.addEventListener('mouseleave', () => {
        itemHeader.style.color = '#2F3035';
    })
})

//Появление "посмотреть товар" в goods и смена цвета текста
goods.forEach((good) => {
    const seeGood = good.querySelector('.good__to-see');
    const textForChange = good.querySelectorAll('.change-color');
    good.addEventListener('mouseover', () => {
        seeGood.classList.remove('hidden');
        textForChange.forEach((text) => {
            text.style.color = '#1C62CD';
        })
    })
    good.addEventListener('mouseleave', () => {
        seeGood.classList.add('hidden');
        textForChange.forEach((text) => {
            text.style.color = '#2F3035';
        })
    })
})

//Открывает бургер в мобильной версии
burgerButton.addEventListener('click', () => {
    const burgerMenu = document.querySelector('.hamburger');
    const mainSlider = document.querySelector('.main-slider');

    burgerMenu.classList.remove('hidden');
    mainSlider.classList.add('position-back');
})

//Открывает список в футере мобильной версии
footerList.forEach((list) => {
    const listToOpen = list.querySelector('.footer-list');
    const changedArrow = list.querySelector('.footer__mob-list');
    dropDownList(list, listToOpen, changedArrow);
})

//Открывает список свойств
selectProperties.forEach((select) => {
    const listToOpen = select.querySelector('.dop-select-list');
    const changedArrow = select.querySelector('.dop-text');

    dropDownList(select, listToOpen, changedArrow);

    listToOpen.addEventListener('click', (e) => {
        const target = e.target;
        changedArrow.textContent = target.textContent;
    })
})

//Работы с aside в каталоге
hideProperties.forEach((property) => {
    const header = property.querySelector('.available-header ');
    const hideIt = property.querySelector('.for-hidden');
    const arrow = property.querySelector('.for-arrow');
    dropDownList(header, hideIt, arrow);
    header.addEventListener('click', () => {
        hideIt.classList.toggle('absolute');
        property.classList.toggle('cut-margin');
    })
})



