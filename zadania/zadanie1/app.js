import Rectangle from './rectangle.js';

const prostokat = new Rectangle(5, 10);

const area = prostokat.area();
const perimeter = prostokat.perimeter();

console.log(`Pole prostokata: ${area}`);
console.log(`Obwod prostokata wynosi: ${perimeter}`);
