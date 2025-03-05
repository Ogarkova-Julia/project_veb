'use strict'

document.addEventListener('DOMContentLoaded', () => {
    console.log('Скрипт отработал корректно')

    /* 3. Подбор тегов в поисковой строке при вводе */

        /* 
        *   Алгоритм
        *
        *   1. Начало.
        *   2. Получаем элементы: Поисковая строка. Список тегов.
        *   3. Навешиваем слушатель событий на ввод в поисковую строку.
        *   4. При вводе текста:
        *       Получаем значение из поисковой строки.
        *       Фильтруем список тегов на основе введенного текста.
        *       Отображаем только те теги, которые соответствуют введенному тексту.
        *   5. Условие: Если поле ввода пустое: Отображаем все теги.
        *   4. Конец
        * 
        *   Блок-схема: /images/block-schema.png
        */
        function binarySearch(arr, target) {
            let left = 0;
            let right = arr.length - 1;
            
            while (left <= right) {
                const mid = Math.floor((left + right) / 2);
                
                if (arr[mid] === target) {
                    return mid; // Нашли элемент, возвращаем его индекс
                }
                
                if (arr[mid] < target) {
                    left = mid + 1;
                } else {
                    right = mid - 1;
                }
            }
            
            return -1; // Элемент не найден
        }
        
        // Пример использования
        const sortedArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        console.log(binarySearch(sortedArray, 4)); // 3
        

    }
);
