const input = require('prompt-sync')();
const trapezoid = require('./trapezoid.js');
const triangle = require('./triangle.js');

const menu = "=== MENU ===\n1. rectangle\n2. triangle\n3. trapezoid\n4. Break\n============";

while (true) {
    console.log(menu);

    let choice = input('Введите фигуру: ');
    if (choice == 1){
        console.log('Vanya');
    } else if (choice == 2){
        let aTriangle = Number(input('Введите основание трецгольника:'));
        let bTriangle = Number(input('Введите левую сторону треугольника:'));
        let cTriangle = Number(input('Введите правую сторону треугольника:'));
        if (aTriangle + bTriangle > cTriangle && aTriangle + cTriangle > bTriangle && cTriangle + bTriangle > aTriangle){
            console.log('Периметр треугольника:', triangle.perimeter(aTriangle, bTriangle, cTriangle));
            console.log('Площадь треугольника:', triangle.area(aTriangle, bTriangle, cTriangle));
            console.log('проверка на равнобедренность треугольника:', triangle.isosceles(aTriangle, bTriangle, cTriangle));
        } else console.log('Треугольника задана неправильно');
    } else if (choice == 3){
        let a = Number(input('Введите нижнее основание трапеции:'));
        let b = Number(input('Введите верхнее основание трапеции:'));
        let c = Number(input('Введите первую боковую сторону трапеции:'));
        let d = Number(input('Введите вторую боковую сторону трапеции:'));
        if (a + b > c + d && a + c > b + d && a + d > b + c){
            console.log('Периметр трапеции:', trapezoid.perimeter(a, b, c, d));
            console.log('Площадь трапеции:', trapezoid.area(a, b, c, d));
            console.log('Длина средней линии:', trapezoid.middleLine(a, b));
        } else console.log('Трапеция задана неправильно')
    } else if (choice == 4){
        break;
    }
}
