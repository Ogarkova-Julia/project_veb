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
        //Для кнопки «Записаться на курс» добавляем обработчик события клика по этой кнопке:
            welcоmeButtonModal.addEventListener("click", () => {
        // удаляем атрибут hidden у модального окна modalApplication и модальное окно становится видимым
           modalApplication.removeAttribute("hidden");
           });
        }
        
        // добавляем обработчик события при клике вне области формы. Тогда каждый раз, когда пользователь кликает где-либо на фоне вокруг появившейся формы, будет вызываться функция,
        window.addEventListener("click", (event) => {
        // проверяем, был ли клик на фоне модального окна
          if (event.target === modalApplication) {
        //если условие выполняется, добавляем атрибут hiddenу модального окна modalApplicationи модальное окно становится невидимым
            modalApplication.setAttribute("hidden", true);
            }
        });
        const closeModalButton = document.querySelector(".application__close");

        //Для кнопки «Закрыть» добавляем обработчик события клика по этой кнопке:
        closeModalButton.addEventListener("click", () => {
        // Добавляем атрибут hidden у модального окна modalApplication и модальное окно становится невидимым
        modalApplication.setAttribute("hidden", true);
    });

        
//для формы войти//
const welcоmeButton = document.querySelector(".header__login");
const modalApplic = document.querySelector(".applications__login");
if (welcоmeButton&&modalApplic) {
    //Для кнопки «Вход» добавляем обработчик события клика по этой кнопке:
        welcоmeButton.addEventListener("click", () => {
    // удаляем атрибут hidden у модального окна modalApplic и модальное окно становится видимым
       modalApplic.removeAttribute("hidden");
       });
    }
    
    // добавляем обработчик события при клике вне области формы. Тогда каждый раз, когда пользователь кликает где-либо на фоне вокруг появившейся формы, будет вызываться функция,
    window.addEventListener("click", (event) => {
    // проверяем, был ли клик на фоне модального окна
      if (event.target === modalApplic) {
    //если условие выполняется, добавляем атрибут hiddenу модального окна modalApplic модальное окно становится невидимым
        modalApplication.setAttribute("hidden", true);
        }
    });
    const closeModal = document.querySelector(".application__close__login");

//Для кнопки «Закрыть» добавляем обработчик события клика по этой кнопке:
closeModal.addEventListener("click", () => {
// Добавляем атрибут hidden у модального окна modalApplic и модальное окно становится невидимым
modalApplic.setAttribute("hidden", true);
});

}
);
