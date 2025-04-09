'use strict'

document.addEventListener('DOMContentLoaded', () => {
    console.log('Скрипт отработал корректно')

    
    /* 2. Окно поддержки сайта */

        /* 
        *   Алгоритм
        *
        *   1. Начало.
        *   2. Пользователь кликает на мигающую кнопку в нижнем правом углу сайта.
        *   3. Открывается "диалоговое окно", где ссылки на социальные сети для связи с разработчиком.
        *   4. Условие: Решается вопрос: Необходима ли помощь поддержки (есть ли вопросы или указания на ошибки сайта)?:
        *               1.Да : пользователь выбирает одну из трех подходящих иконок для перехода на определенный акккаунт разработлика.
        *               2.Нет: пользователь закрывает окно, нажав на крестик в верхнем правом углу.
        *   5. Конец
        * 
        *   Блок-схема: /images/block-schema.png
        */

       

    // Слушатель для кнопки открытия чата
    const chatButton = document.getElementById('chat-button');
    
    if (chatButton) {
        chatButton.addEventListener('click', function() {
            console.log('Кнопка "Чат с поддержкой" нажата.');
            document.getElementById('chat-window').classList.toggle('hidden');
        });
    } else {
        console.log('Кнопка "Чат с поддержкой" не найдена.');
    }

    // Слушатель для кнопки закрытия чата
    const closeChatButton = document.getElementById('close-chat');

    if (closeChatButton) {
        closeChatButton.addEventListener('click', function() {
            console.log('Кнопка закрытия чата нажата.');
            document.getElementById('chat-window').classList.add('hidden');
        });
    } else {
        console.log('Кнопка закрытия чата не найдена.');
    }
    




    /*3. Появление форм*/
    /*Алгоритм
        *
        *   1. Начало.
        *   2. Пользователь кликает на кнопку Вход/регистрация сайта.
        *   3. На экране появляется форма с заполнением логина и пароля для входа в аккаунт пользователя.
        *   4. Условие: Пользователь зарегестрирован на сайте?:
        *       1. да: заполняет появившиеся поля
        *       2. нет: переходит на форму Зарегистрироваться с помощью нажатия на "Нет аккаунта? Зарегистрируйтесь", и заполняет появившуюся форму.
        *       и наоборот
        *   5. Конец
        * 
        *   Блок-схема: /images/block-schema(2).png
        */


   // Для формы заявки
const welcomeButtonModal = document.querySelector(".services__button");
const modalApplication = document.querySelector(".applications");
const closeModalButton = document.querySelector(".application__close");

// Открытие формы заявки
if (welcomeButtonModal && modalApplication) {
    welcomeButtonModal.addEventListener("click", () => {
        modalApplication.removeAttribute("hidden");
        console.log('Кнопка открытия формы заявки нажата.');
    });
}

// Закрытие формы регистрации при клике вне области
window.addEventListener("click", (event) => {
    if (event.target === modalApplication) {
        modalApplication.setAttribute("hidden", true);
    }
});

// Закрытие формы регистрации по кнопке «Закрыть»
if (closeModalButton) {
    closeModalButton.addEventListener("click", () => {
        modalApplication.setAttribute("hidden", true);
        console.log('Кнопка закрытия формы заяки нажата.');
    });
}

// Для формы войти
const welcomeButton = document.querySelector(".header__login");
const modalApplic = document.querySelector(".applications__login");
const closeModal = document.querySelector(".application__close__login");

// Открытие формы входа
if (welcomeButton && modalApplic) {
    welcomeButton.addEventListener("click", () => {
        modalApplic.removeAttribute("hidden");
        console.log('Кнопка открытия формы входа нажата.');
        const login = modalApplic.querySelector('#pho');
        const login_vel = window.localStorage.getItem("login");
       if (login && login_vel){

           login.value = login_vel;
       }
    });
}

// Закрытие формы входа при клике вне области
window.addEventListener("click", (event) => {
    if (event.target === modalApplic) {
        modalApplic.setAttribute("hidden", true);
    }
});

// Закрытие формы входа по кнопке «Закрыть»
if (closeModal) {
    closeModal.addEventListener("click", () => {
        modalApplic.setAttribute("hidden", true);
        console.log('Кнопка закрытия формы входа нажата.');
    });
};

// Переключение между формами
const switchToLoginButton = document.createElement('button');
switchToLoginButton.textContent = "Перейти к входу";
modalApplication.appendChild(switchToLoginButton);

switchToLoginButton.addEventListener("click", () => {
    modalApplication.setAttribute("hidden", true);
    modalApplic.removeAttribute("hidden");
    console.log('Переключение на форму входа.');
});

const switchToRegistrationButton = document.createElement('button');
switchToRegistrationButton.textContent = "Перейти к заявке";
modalApplic.appendChild(switchToRegistrationButton);

switchToRegistrationButton.addEventListener("click", () => {
    modalApplic.setAttribute("hidden", true);
    modalApplication.removeAttribute("hidden");
    console.log('Переключение на форму отправки заявки');
});



// Отправка данных на форме входа
modalApplic.addEventListener('submit', event => {
    event.preventDefault(); // Предотвращаем отправку формы


    const password = modalApplic.querySelector('#pas').value;

    const login = modalApplic.querySelector('#pho').value;


    const errorMessage = modalApplic.querySelector('#error-message');

    if (password !== "123") {
        errorMessage.textContent = 'Пароли неверный';
        errorMessage.style.color = 'red';
        return;
    }


    // Здесь можно добавить отправку данных на сервер
    errorMessage.textContent = 'Вход прошёл успешно!';
    errorMessage.style.color = 'green';

    // Запишем логин
    window.localStorage.setItem("login", login);
});



//Создание массива//
const СoursesContainer = document.querySelector(".courses");
if (СoursesContainer) {
    const dataTitleСourses= [
        "Курс по маркетингу",
        "Основы бухгалтерского учета",
        "Основы предпринимательства",
    ];
    const titleСourses =
    СoursesContainer.querySelectorAll(".courses__subtittle");
    titleСourses.forEach((item, index) => {
        item.textContent = dataTitleСourses[index];
    });
}


// задание 3.5. Массив динамического вывода меню//

/*const headerMenu = document.querySelector('.header__menu');

if (headerMenu){
    const headerList = headerMenu.querySelector('.menu__list');

    const menuData = {
            link1: {
                link:'index.html',
                title:'Главная',
            },
            link2: {
                link:'catalog.html',
                title:'Каталог курсов',
            },
            link3: {
                link:'#',
                title:'Социальные сети',
            }
        }


        for (const linkItem in menuData) {
            const link = menuData[linkItem];
      const linkIndex = `<li class="menu__item"><a href="${link.link}" class="menu__link">${link.title}</a></li>`;
console.log(headerList);
headerList.insertAdjacentHTML('beforeend', linkIndex);
        }
}
console.log('Навигацинное меню создано с помощью javascript!'); */


    /* задание 3.6 */
    const menuContainer = document.querySelector('.menu');
    if (menuContainer) {
        const menuList = menuContainer.querySelector('.menu__list');

        // Пример URL для получения данных с сервера
        const apiUrl = 'data.json';

        // Функция для создания карточки
        const createMenu = (linkUrl, title) => {

            // Шаблонные строки и подстановки
            const menu = `
                <li class="menu__item"><a class="menu__link" href="${linkUrl}">
                    ${title}
                </a></li>
            `;

            return menu;
        }

        // Загрузка данных с сервера
        fetch(apiUrl)
            .then(response => response.json())
            .then(data => {
                console.log(data); // Данные
                console.log(typeof (data)); // Тип полученных данных

                data.forEach(item => {
                    const menuElement = createMenu(item.link, item.title);
                    menuList.insertAdjacentHTML('beforeend', menuElement);
                });
            })
            .catch(error => {
                console.error('Ошибка при загрузке данных:', error);
            });
    }





    // Preloader страницы
    const preloader = document.querySelector('.preloader');
    const content = document.querySelector('.content');
    if (preloader && content) {
        setTimeout(() => {
            // Скрываем прелоадер
            preloader.style.opacity = '0';
            preloader.style.visibility = 'hidden';

            // Показываем контент
            content.style.display = 'block';

            // Удаляем элемент из DOM
            preloader.remove();
        }, 3000); // Задержка 3 секунды
    }
    console.log('Preloader создана')



        // Карусель (слайдер)
        const slider = document.querySelector('.swiper');

        if (slider) {
            const swiper = new Swiper(slider, {
                // Дополнительные параметры
                slidesPerView: 4, // Количество слайдов на экране
                spaceBetween: 30, // Расстояние между слайдами
                loop: true,  // Зацикливание слайдов
    
                // Пагинация
                pagination: {
                    el: '.swiper-pagination',
                },
    
                // Навигационные стрелки
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
            });
        }

        

}
);

