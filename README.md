# Калькулятор параметров прямоугольника и окружности

Простой калькулятор для вычисления параметров прямоугольника и окружности на основе введенных пользователем значений.

## Как использовать

1. Убедитесь, что у вас установлен Node.js.
2. Скопируйте содержимое кода в файл с расширением `.js`.
3. Запустите скрипт с помощью Node.js.
4. Следуйте инструкциям, вводя длину и ширину прямоугольника или окружности.
5. Получите результаты вычислений.

## Описание кода прямоугольника

- Код написан на языке JavaScript с использованием модуля `readline` для работы с вводом/выводом.
- Функция `calculateRectangleParameters` вычисляет параметры прямоугольника (периметр, площадь, длину диагонали) на основе введенных значений длины и ширины.
- Интерфейс ввода-вывода запрашивает у пользователя значения длины и ширины прямоугольника, а затем выводит вычисленные параметры.
- Программа завершается после вывода результатов.

## Описание кода для окружности

- Код написан на языке JavaScript с использованием модуля `readline` для работы с вводом/выводом.
- Функция `calculateCircleParameters` вычисляет параметры окружности (длину окружности, площадь круга, площадь кругового сектора) на основе введенных значений радиуса и угла дуги.
- Функция `getInput` используется для получения пользовательского ввода с помощью `rl.question` в асинхронном режиме.
- Функция `main` является точкой входа в программу. Она ожидает ввода пользователя, затем вычисляет и выводит параметры окружности.
- Программа завершается после вывода результатов.

## Авторы

Автор: [Ivan, Anastasia]
