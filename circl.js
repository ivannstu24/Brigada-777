
const readline = require('readline');


// функция ввода-вывода
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


//вычисляем параметры окружности
function calculateCircleParameters(radius, alpha)
{
  if (radius<0) {
    throw new  RangeError(' радиус не может быть отрицательным');
}
  const circleLength = 2 * Math.PI * radius; //длина окружности
  const circleArea = Math.PI * radius * radius; //площадь круга
  const circleSector = (Math.PI * radius * radius * alpha)/360; //площадь кругового сектора
  return { circleLength, circleArea, circleSector };
}


function getInput(prompt) {
  return new Promise((resolve) => {
    rl.question(prompt, (answer) => {
      resolve(answer);
    });
  });
}



async function main() {
  const radius = await getInput('радиус окружности: ');

  const alpha = await getInput('градусная мера дуги на которую опирается сектор : ');

  const circle = calculateCircleParameters(parseFloat(radius), parseFloat(alpha));
  console.log(`длина окружности: ${circle.circleLength}`);
  console.log(`площадь круга : ${circle.circleArea}`);
  console.log(`площадь кругового сектора : ${circle.circleSector}`);

  rl.close();
}

main();

