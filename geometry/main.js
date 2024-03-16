// Функция для вычисления периметра прямоугольника
function calculateRectanglePerimeter(width, height) {
    return 2 * (width + height);
}

// Функция для вычисления площади прямоугольника
function calculateRectangleArea(width, height) {
    return width * height;
}

// Функция для вычисления длины диагонали прямоугольника
function calculateRectangleDiagonal(width, height) {
    return Math.sqrt(width * width + height * height);
}

// Получаем ширину и высоту 
const widthInput = parseFloat(prompt("Введите ширину прямоугольника:"));
const heightInput = parseFloat(prompt("Введите высоту прямоугольника:"));

// Проверяем, корректные значения
if (!isNaN(widthInput) && !isNaN(heightInput) && widthInput > 0 && heightInput > 0) {
    const width = widthInput;
    const height = heightInput;

    const outputElement = document.querySelector(".output");

    outputElement.innerHTML = `
        <p>Периметр прямоугольника: ${calculateRectanglePerimeter(width, height)}</p>
        <p>Площадь прямоугольника: ${calculateRectangleArea(width, height)}</p>
        <p>Длина диагонали прямоугольника: ${calculateRectangleDiagonal(width, height)}</p>`;

    console.log("Периметр прямоугольника:", calculateRectanglePerimeter(width, height));
    console.log("Площадь прямоугольника:", calculateRectangleArea(width, height));
    console.log("Длина диагонали прямоугольника:", calculateRectangleDiagonal(width, height));
} else {
    console.log("Пожалуйста, введите корректные положительные числовые значения.");
}