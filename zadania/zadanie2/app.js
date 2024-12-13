import { addUser, removeUser, findUser } from './userManager.js';
const users = [];

addUser(users, {id: 1, name: 'Oliwer'});
addUser(users, {id: 1, name: 'Mateusz'});
addUser(users, {id: 1, name: 'Aleksander'});

console.log('Uzytkownicy po dodaniu', users);

removeUser(users, 2);
console.log('Uzytkownicy po usunieciu', users);

const user = findUser(users, 3);
console.log('Znaleziony uzytkownik', users);