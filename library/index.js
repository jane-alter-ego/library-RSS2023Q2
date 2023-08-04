//burger
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("menu-burger-button").addEventListener("click", function() {
        document.querySelector(".header-links").classList.toggle("open")
    })
});

//Close burger by Esc
window.addEventListener('keydown', (e) => {
    if (e.key === "Escape") {
        document.querySelector(".header-links").classList.remove("open")
    }
});

// Close burger by outer click
document.getElementById("open-menu-burger").addEventListener('click', event => {
    /*event._isClickWithInMenu = true; menu is still open*/
    if (event._isClickWithInMenu) return;
    document.querySelector(".header-links").classList.remove("open")
});
document.getElementById("menu-burger-button").addEventListener('click', event => {
    event._isClickWithInMenu = true;
});
document.body.addEventListener('click', event => {
    if (event._isClickWithInMenu) return;
    document.querySelector(".header-links").classList.remove("open") 
});


console.log(`Library#2 Самооценка 50/50\n
1.Вёрстка соответствует макету. Ширина экрана 768px +26:\n
блок <header> +2\n
секция Welcome +2\n
секция About +2 стрелки есть\n
под картинкой находится 5 точек: +2\n
секция Favorites +4\n
секция CoffeShop +4\n
секция Contacts +4\n
секция LibraryCard +4\n
блок <footer> + 2\n
2.Ни на одном из разрешений до 640px включительно не появляется горизонтальная полоса прокрутки +12:\n
нет полосы прокрутки при ширине страницы от 1440рх до 640рх +4\n
элементы не выходят за пределы окна браузера при ширине страницы от 1440рх до 640рх +4\n
элементы не наезжают друг на друга при ширине страницы от 1440рх до 640рх +4\n
3.На ширине экрана 768рх реализовано адаптивное меню +12\n:
при нажатии на бургер-иконку плавно появляется адаптивное меню +4\n
при нажатии на крестик или на область вне меню, адаптивное меню плавно скрывается, уезжая за экран +4\n
ссылки в адаптивном меню работают, обеспечивая плавную прокрутку по якорям при нажатии, а само адаптивное меню при этом плавно скрывается +4`);



/*console.log(`Library#1 Самооценка 100/100\n
PerfectPixel: Нет отклонений вёрстки от макета, превышающих 10px;\n
Отличие в ширине слов и отступах между буквами при сопоставлении макета и вёрстки не считается ошибкой, т.к. используется правильный шрифт с правильно указанными свойствами\n
Вёрстка валидная 10/10;\n
\n
Вёрстка семантическая 16/16:\n
Есть header, main, footer;\n
шесть элементов section;\n
только один заголовок 'h1';\n
пять заголовков 'h2';\n
один элемент nav;\n
два списка ul > li > a (панель навигации, ссылки на соцсети в футере);\n
семь кнопок button;\n
два инпута\n
\n
Вёрстка соответствует макету 54/54\n
\n
блок header 8/8:\n
текст по макету, растояние между элементами меню 30px;\n
элементы меню работают как якоря, эффект hover, cursor: pointer;\n
расстояние от меню до иконки пользователя - 40px. Иконка не в nav;\n
текст 'Brooklyn Public Library' h1\n
\n
секция Welcome 4/4\n
\n
секция About 6/6:\n
в папке 5 картинок;\n
Расстояния между кнопками пагинации 10px;\n
Интерактивная область должна быть размером +5px в каждую сторону. Т.е. это будут прозрачные элементы размерами 26x26, внутри которых будут располагаться непосредственно кнопки 16x16.\n
\n
секция Favorites 8/8:\n
интерактивные кнопки input type='radio' + label;\n
область вокруг кнопки и надписи (кнопка и надпись интерактивны);\n
кнопки 'buy' плавно меняют цвет при наведении;\n
Кнопка 'own' disabled\n
\n
секция CoffeShop 6/6\n
\n
секция Contacts 6/6:\n
Телефонные номера ссылки 'tel';\n
Имя контактного лица ссылка 'mailto' и адресом почты;\n
\n
секция LibraryCard 8/8:\n
'Find your Library card' - форма с полями input;\n
Желательно сделать ограничения в полях input на использование только букв и цифр, а также дефиса. Но это правило проверять не нужно;\n
Все 3 кнопки интерактивные, цвет меняю плавно плавно;\n
Иконки Visits, Bonuses, Books в папке\n
\n
блок footer 8/8:\n
Адрес библиотеки ссылкой;\n
Иконки соцсетей ссылки;\n
имя и cсылка на GitHub\n
\n
Общие требования к верстке 20/20:\n
для построения сетки используются флексы 2/2;\n
при уменьшении масштаба вся вёрстка по центру 2/2;\n
иконки svg 2/2;\n
изображения jpg или png 2/2;\n
есть favicon 2/2;\n
плавная прокрутка по якорям 2/2;\n
cсылка на GitHub 2/2;\n
в футере ссылка The Rolling Scopes School ведет на страницу курса https://rs.school/js-stage0/ 2/2;\n
интерактивность элементов согласно макету 2/2;\n
плавное изменение внешнего вида элемента при наведении и клике не влияет на соседние элементы 2/2`);*/
