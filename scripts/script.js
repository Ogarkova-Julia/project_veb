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


    //Для формы зарегистрироваться//
    const welcоmeButtonModal = document.querySelector(".services__button");
    const modalApplication = document.querySelector(".applications");
    if (welcоmeButtonModal&&modalApplication) {
            welcоmeButtonModal.addEventListener("click", () => {
           modalApplication.removeAttribute("hidden");
           console.log('Кнопка открытия формы чата нажата.');
           });
        }
        
        window.addEventListener("click", (event) => {
          if (event.target === modalApplication) {
            modalApplication.setAttribute("hidden", true);
            }
        });
        const closeModalButton = document.querySelector(".application__close");

        //Для кнопки «Закрыть» добавляем обработчик события клика по этой кнопке:
        closeModalButton.addEventListener("click", () => {
        modalApplication.setAttribute("hidden", true);
        console.log('Кнопка закрытия формы чата нажата.');
    });

        
//для формы войти//
const welcоmeButton = document.querySelector(".header__login");
const modalApplic = document.querySelector(".applications__login");
if (welcоmeButton&&modalApplic) {
        welcоmeButton.addEventListener("click", () => {
       modalApplic.removeAttribute("hidden");
       console.log('Кнопка открытия формы чата нажата.');
       });
    }
    
    window.addEventListener("click", (event) => {
      if (event.target === modalApplic) {
        modalApplication.setAttribute("hidden", true);
        }        
    });
    const closeModal = document.querySelector(".application__close__login");

//Для кнопки «Закрыть» добавляем обработчик события клика по этой кнопке:
closeModal.addEventListener("click", () => {
modalApplic.setAttribute("hidden", true);
console.log('Кнопка закрытия формы чата нажата.');
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

}
);
