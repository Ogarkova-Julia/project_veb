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
        document.getElementById('chat-button').addEventListener('click', function() {
        console.log('Кнопка "Чат с поддержкой" нажата.');
    
        document.getElementById('chat-window').classList.toggle('hidden');
        });

        // Слушатель для кнопки закрытия чата
        document.getElementById('close-chat').addEventListener('click', function() {
        console.log('Кнопка закрытия чата нажата.');

        document.getElementById('chat-window').classList.add('hidden');
        });

    }
    );
