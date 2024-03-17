// Подключаем модуль readline для работы с вводом/выводом
const readline = require('readline');


// Создаем интерфейс для чтения из стандартного ввода и записи в стандартный вывод
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


//Функция для вычисления параметров окружности
function calculateCircleParameters(radius, alpha)
{
  const circleLength = 2 * Math.PI * radius;  //вычисление длины окружности
  const circleArea = Math.PI * radius * radius; //вычисление площади круга
  const circleSector = (Math.PI * radius * radius * alpha)/360; //вычисление площади кругового сектора
  return { circleLength, circleArea, circleSector };
}


rl.question('Введите радиус окружности : ', (radius) => {
  rl.question('Введите градусную меру угла дуги, на которую опирается сектор : ', (alpha) => {
// вычисляем параметры окружности
    const circle = calculateCircleParameters(parseFloat(radius), parseFloat(alpha));
    console.log(`Длина окружности: ${circle.circleLength}`);
    console.log(`Площадь круга: ${circle.circleArea}`);
    console.log(`Площадь кругового сектора: ${circle.circleSector}`);

    rl.close();
  });
});
    
