import menuMaker from './menu';
let menu=menuMaker(['Главная','Обо мне','Блог'],'menu');
document.body.appendChild(menu);
console.log('in index.js');