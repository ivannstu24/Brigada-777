const input = require('prompt-sync')();

const menu = "=== MENU ===\n1. rectangle\n2. triangle\n3. trapezoid\n4. Break\n============";

let tasks = {};

while (true) {
    console.log(menu);

    let choice = input('Введите фигуру: ');
    if (choice == 1){
        console.log('Vanya');
    } else if (choice == 2){
        console.log('Darya');
    } else if (choice == 3){
        let a = Number(input('Введите нижнее основание трапеции:'));
        let b = Number(input('Введите верхнее основание трапеции:'));
        let c = Number(input('Введите первую боковую сторону трапеции:'));
        let d = Number(input('Введите вторую боковую сторону трапеции:'));
        let h = Math.sqrt(Math.pow(c, 2) - Math.pow(((a - b) * (a - b) + c * c - d * d) / (2 * (a - b)), 2));
        if (a + b > c + d && a + c > b + d && a + d > b + c){
            console.log('Периметр трапеции:', a + b + c + d);
            console.log('Площадь трапеции:', ((a + b) * h) / 2);
            console.log('Длина средней линии:', (a + b) / 2);
        } else console.log('Трапеция задана неправильно')
    } else if (choice == 4){
        break;
    }
}
