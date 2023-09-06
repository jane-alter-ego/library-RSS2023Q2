const StorageItems = {
    USERS: 'users',
    LOGGED_USER: 'loggedUser',
}

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

//fieldset sticky

document.addEventListener('DOMContentLoaded', function() {
    let fieldset = document.getElementById("fieldset");
    let sticky = fieldset.offsetTop;
    const favoritesItems = document.getElementById('favorites-items');
    const endSticky = fieldset.offsetTop + favoritesItems.offsetHeight - fieldset.offsetHeight;
    window.onscroll = function() {myFunction()};
    function myFunction() {
        if (window.scrollY >= sticky && window.scrollY <= endSticky) {
          fieldset.classList.add("sticky")
        } else {
          fieldset.classList.remove("sticky");
        }
      }
})


//Open user-menu
document.addEventListener("DOMContentLoaded", function() {
     document.getElementById("button-user").addEventListener("click", function() {
         document.getElementById("user-menu").classList.toggle("open")
     })
 });

//Открытие меню юзера после регистрации
document.addEventListener("DOMContentLoaded", function() {
   document.getElementById("button-user-active").addEventListener("click", function() {
       document.getElementById("dropmenu").classList.toggle("open")
   })
});

//Close user-menu by Esc
window.addEventListener('keydown', (e) => {
    if (e.key === "Escape") {
        document.querySelector(".user-menu").classList.remove("open");
    }
});

//Close user-menu by outer click
document.getElementById("button-user").addEventListener('click', event => {
    event._isClickWithInUserMenu = true;
 });
document.getElementById("user-inactive").addEventListener('click', event => {
     /*event._isClickWithInMenu = true; menu is still open*/
    if (event._isClickWithInUserMenu) return;
    document.querySelector(".user-menu").classList.remove("open")
});

document.body.addEventListener('click', event => {
    if (event._isClickWithInUserMenu) return;
    document.querySelector(".user-menu").classList.remove("open") 
});

// Close dropmenu by outer click
document.getElementById("button-user-active").addEventListener('click', event => {
   event._isClickWithInUserMenu = true;
});
document.getElementById("user-active").addEventListener('click', event => {
    /*event._isClickWithInMenu = true; menu is still open*/
   if (event._isClickWithInUserMenu) return;
   document.querySelector(".dropmenu").classList.remove("open")
});

document.body.addEventListener('click', event => {
   if (event._isClickWithInUserMenu) return;
   document.querySelector(".dropmenu").classList.remove("open") 
});


/*Открытие модального окна Login в меню юзера*/
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("user-menu-link-login").addEventListener("click", function() {
        document.getElementById("overlay").classList.toggle("overlay-open");
        let login = document.getElementById("modal-login");
        login.style.display = 'flex';
    })
});
/*Открытие модального окна Login в секции Get a Library Card*/
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("log-in").addEventListener("click", function() {
        document.getElementById("overlay").classList.toggle("overlay-open");
        let login = document.getElementById("modal-login");
        login.style.display = 'flex';
    })
});

/* переход из модального окна Login в Register*/
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("no-account-button").addEventListener("click", function() {
        let login = document.getElementById("modal-login");
        login.style.display = 'none';
        let register = document.getElementById("modal-register");
        register.style.display = 'flex';
    })
});


/*Открытие модального окна Register в меню юзера*/
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("user-menu-link-register").addEventListener("click", function() {
        document.getElementById("overlay").classList.toggle("overlay-open");
        let register = document.getElementById("modal-register");
        register.style.display = 'flex';
    })
});

/*Открытие модального окна Register в секции Get a Library Card*/
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("sign-up").addEventListener("click", function() {
        document.getElementById("overlay").classList.toggle("overlay-open");
        let register = document.getElementById("modal-register");
        register.style.display = 'flex';
    })
});

/*переход из модального окна Register в Login*/
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("has-account-button").addEventListener("click", function() {
        let register = document.getElementById("modal-register");
        register.style.display = 'none';
        let login = document.getElementById("modal-login");
        login.style.display = 'flex';
    })
});

//по кнопке Buy
document.addEventListener("DOMContentLoaded", function() {
    document.querySelectorAll(".buy-before-login").forEach(el => el.addEventListener("click", function(event) {
        const user = JSON.parse(window.localStorage.getItem(StorageItems.LOGGED_USER));
        if (!user?.cardNumber) {
            document.getElementById("overlay-buy").classList.toggle("overlay-open");
            let div = document.getElementById("modal-buy-card");
            div.style.display = 'block'; //Открытие модального окна с покупкой карты и оверлея
        } else {
            const favoritesItems = event.target.parentElement;
            const heading = favoritesItems.querySelector('h4').innerText.replace("By", ",").toLowerCase(); // передача данных о книге в профиль юзера
        
            // надо счетчик книг
            const booksInList = document.getElementById('rented-books').childNodes.length; // кол-во ли в списке
            const booksCountes = document.querySelectorAll(".books-number");
            booksCountes.forEach(el => (el.innerHTML = booksInList));

            //список книг в профиле
            let liFirst = document.createElement('li');
            liFirst.innerHTML = heading;
            document.getElementById("rented-books").prepend(liFirst);
            //изм вида кнопок
            const buttonBuy = favoritesItems.querySelector('.buy');
            buttonBuy.style.display = 'none';
            const buttonOwn = favoritesItems.querySelector('.own');
            buttonOwn.style.display = 'block';
            
        }
       
    }))
});

//Закрытие модального окна с покупкinnerой карты и оверлея крестику
document.getElementById("modal-buy-card-close-button").addEventListener('click', event => {
    document.getElementById("overlay-buy").classList.remove("overlay-open");
    let modalBuyCard = document.getElementById("modal-buy-card");
    modalBuyCard.style.display = 'none';
});

/*Открытие модального окна с профилем*/
document.addEventListener("DOMContentLoaded", function() {
    document.querySelectorAll(".profile").forEach(el => el.addEventListener("click", function() {
        document.getElementById("overlay").classList.toggle("overlay-open");
        let register = document.getElementById("modal-profile");
        register.style.display = 'flex';
    }))
});


/*Закрытие модалок и оверлея по крестику */
document.querySelectorAll(".close-button").forEach(el => el.addEventListener('click', event => {
    document.getElementById("overlay").classList.remove("overlay-open");
    let div = document.querySelectorAll(".modal");
    div.forEach(el => el.style.display = 'none');
}));


// Slider About
let slideIndex = 1;

const handleArrowButtons = (slides) => {
    const firstSlide = slides[0];
    const lastSlide = slides[slides.length - 1];

    const arrowLeft = document.getElementById("leftCarret");
    const arrowRight = document.getElementById("rightCarret");


    if (firstSlide.style.display === 'block') {
        arrowLeft.setAttribute('disabled', true);
    } else {
        arrowLeft.removeAttribute('disabled');
    }

    if (lastSlide.style.display === 'block') {
        arrowRight.setAttribute('disabled', true);
    } else {
        arrowRight.removeAttribute('disabled');
    }
}

showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
};

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
};

function showSlides(n) {
    const showCount = window.innerWidth <= 1024 ? 1 : 3;
    const slides = document.getElementsByClassName("img");
    const dots = document.getElementsByClassName("circle-button");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    if (showCount === 1) {
        slides[slideIndex-1].style.display = "block";
    } else {
        Array.from(slides).forEach((slide, index) => {
            if (index >= n - 1 && index < (n + showCount - 1)) {
                slide.style.display = "block";
            }
        })        
    }
    dots[slideIndex-1].className += " active";
    handleArrowButtons(slides);
};

window.onresize = () => {
    document.location.reload();
};

//Slider Favorites

document.addEventListener("DOMContentLoaded", function() {
    const radios = document.querySelectorAll('input[type=radio][name="season"]');
    radios.forEach(radio => (radio.addEventListener("change", () => {
        const allBooks = document.querySelectorAll("div.favorites-items");
        allBooks.forEach(book => (book.classList.add("hidden")));
        const seasonBooks = document.querySelectorAll(`div.favorites-items.${radio.value}`);
        seasonBooks.forEach(book => ((book.classList.remove("hidden"))));
    })));
});


//Register
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("form-modal-register").addEventListener("submit", function(event) {
        // event.preventDefault();
        event.stopPropagation();
        let firstName = document.querySelector('[name="first"]').value;
        let lastName = document.querySelector('[name="last"]').value;
        let email = document.querySelector('[name="email-register"]').value;
        let password = document.querySelector('[name="password-register"]').value;
        
        const profile = {
            firstName,
            lastName,
            email,
            password,
            loginCount: 1,
        }
        const localUsers = window.localStorage.getItem(StorageItems.USERS);
        const users = localUsers ? JSON.parse(localUsers) : [];
        const foundUser = users.filter(user => user.email === email);
        if (foundUser.length > 0) {
            alert('User with such email already exists');
            return;
        }
        users.push(profile);
        window.localStorage.setItem(StorageItems.USERS, JSON.stringify(users));
        window.localStorage.setItem(StorageItems.LOGGED_USER, JSON.stringify(profile)); // юзер сразу логинится
        handleLogin(profile); // все изменения залогиненного интерфейса

        let register = document.getElementById("modal-register");
        register.style.display = 'none';
        document.querySelector(".overlay").classList.remove("overlay-open");
    })
});

//Login
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("form-modal-login").addEventListener("submit", function(event) {
        //event.preventDefault();
        event.stopPropagation();

        let mail = document.querySelector('[name="email-login"]').value;
        let pass = document.querySelector('[name="password-login"]').value;
        
        const data = JSON.parse(localStorage.getItem(StorageItems.USERS));
        if (!data || data.length === 0) {
            return alert("User doesn't exist");
        }
        const foundUser = data.filter(user => user.email === mail)[0];

        if (!foundUser) {
            return alert("User doesn't exist");
        }
        if (foundUser.password === pass) {
            window.localStorage.setItem(StorageItems.LOGGED_USER, JSON.stringify(foundUser));
            const updatedUser = updateUserInStorage({ loginCount: foundUser.loginCount ? (Number(foundUser.loginCount) + 1) : 1 });
            handleLogin(updatedUser);
            
            let login = document.getElementById("modal-login");
            login.style.display = 'none';
            document.querySelector(".overlay").classList.remove("overlay-open");
            return;
        }
        return alert("Invalid credentials");
        
    })
});

//изм данных о юзере в локалсторедж
const updateUserInStorage = (updateData) => {
    const users = JSON.parse(window.localStorage.getItem(StorageItems.USERS));
    const loggedUser = JSON.parse(window.localStorage.getItem(StorageItems.LOGGED_USER));

    const newUser = Object.assign(loggedUser, updateData);

    users.forEach((item, index, arr) => {
        if (item.email === newUser.email) {
            arr[index] = newUser;
        }
    });

    window.localStorage.setItem(StorageItems.USERS, JSON.stringify(users));
    window.localStorage.setItem(StorageItems.LOGGED_USER, JSON.stringify(newUser));

    return newUser;
}

document.addEventListener('DOMContentLoaded', () => {
    const user = JSON.parse(window.localStorage.getItem(StorageItems.LOGGED_USER));
    if (user) {
        handleLogin(user);
    }
})

// все изменения залогиненного интерфейса
handleLogin = (user) => {
            let buttonUser = document.getElementById("button-user"); // изм кнопки юзера
            buttonUser.style.display = 'none';
            let buttonUserActive = document.getElementById("dropmenu");
            buttonUserActive.style.display = 'flex';
            document.getElementById("card").classList.toggle("open"); // изм вида секции с карточкой
            
            let username = document.getElementById("username"); // имя юзера в поле library card
            username.value = user.firstName + ' ' + user.lastName;

            let profileName = document.getElementById("username-profile"); // имя юзера в modal profile
            profileName.innerText = user.firstName + ' ' + user.lastName;

            let cardNumber = document.getElementById("card-number"); // card number in modal profile
            let libraryCardNumber = document.getElementById("user-card-number"); // card number in library card
            let cardNumberInDropmenu = document.getElementById("card-number-dropmenu"); // card number in dropmenu
            
            if (user.cardNumber != undefined) {
                cardNumber.innerText = user.cardNumber;
                libraryCardNumber.value = user.cardNumber;
                cardNumberInDropmenu.textContent = user.cardNumber;
                cardNumberInDropmenu.style.margin = "5px 0 3px -25px";
                cardNumberInDropmenu.style.fontSize = "14px";
            } else {
                cardNumber.innerText = "000000000";
                libraryCardNumber.value = "000000000";
            } 

            let avatarName = document.getElementById("avatar"); // аватар юзера в modal profile
            avatarName.innerText = user.firstName[0] + user.lastName[0];

            let buttonStyle = document.getElementById("button-user-active"); // аватар юзера на иконке
            buttonStyle.innerText = user.firstName[0] + user.lastName[0]; 

            const loginCounter = document.getElementById('visit-counter-profile'); // счетчик логинов (переписать по классу)
            loginCounter.innerText = user.loginCount;

            const loginCounterCard = document.getElementById('visit-counter-card');
            loginCounterCard.innerText = user.loginCount;  

            if (user.cardNumber) {
                let modalBuyCard = document.getElementById("modal-buy-card");
                modalBuyCard.style.display = 'none';
                document.getElementById("overlay-buy").classList.remove("overlay-open");
            };       
        
};

//Buy card - first login

//Get a card number
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("form-modal-buy-card").addEventListener("submit", function(event) {
       //event.preventDefault();
        event.stopPropagation();
        const userString = window.localStorage.getItem(StorageItems.LOGGED_USER);
        const user = userString ? JSON.parse(userString) : undefined;
        console.log(user);

        if (!user) {
            let login = document.getElementById("modal-login");
            login.style.display = 'flex';
            document.getElementById("overlay").classList.toggle("overlay-open");
        } else if (!user.cardNumber) {
            console.log(user.cardNumber)
            assignCardNumber();
            let card = document.getElementById("modal-buy-card");
            card.style.display = 'none';
            document.getElementById("overlay-buy").classList.remove("overlay-open");
        }; 
    })
});

//random card number
function randomCardNumber() {
    const randomNumber = Math.floor(Math.random() * 1000000000).toString(16);
    return randomNumber.padStart(9, '0');
}

const findUserByCardNumber = (cardNumber) => {
    const data = JSON.parse(window.localStorage.getItem(StorageItems.USERS));

    return data.filter(user => user.cardNumber === cardNumber)[0];
}

function assignCardNumber() {
    let cardNumber;    
    while (true) {
        cardNumber = randomCardNumber();
        if (!findUserByCardNumber(cardNumber)) {
            break;
        }
    }
    const user = JSON.parse(window.localStorage.getItem(StorageItems.LOGGED_USER));
    user.cardNumber = cardNumber;
    window.localStorage.setItem(StorageItems.LOGGED_USER, JSON.stringify(user));
    const users = JSON.parse(window.localStorage.getItem(StorageItems.USERS));
    users.forEach(item => {
        if (item.email === user.email) {
            item.cardNumber = cardNumber;
        };
    });
    window.localStorage.setItem(StorageItems.USERS, JSON.stringify(users));
    document.location.reload();
};

//Check the card
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("check-card").addEventListener("click", function() {
        //взять имя и номер карты и проверить есть ли такой среди зареганных
        //let name = document.querySelector('[name="name"]').value;
        let cardNumber = document.querySelector('[name="number"]').value;
        const data = JSON.parse(localStorage.getItem(StorageItems.USERS));
        
        const foundUser = data.filter(user => user.cardNumber === cardNumber)[0];

        if (foundUser) {
            const username = document.getElementById('username');
            const userCardNumber = document.getElementById('user-card-number');
            const loginCounterCard = document.getElementById('visit-counter-card');
            username.value = foundUser.firstName + ' ' + foundUser.lastName;
            userCardNumber.value = foundUser.cardNumber;
            loginCounterCard.innerText = foundUser.loginCount;
            const booksInList = document.getElementById('rented-books').childNodes.length; // кол-во ли в списке
            const booksCountes = document.querySelectorAll(".books-number");
            booksCountes.forEach(el => (el.innerHTML = booksInList));
            document.getElementById("card").classList.toggle("open");
            setTimeout(() =>{ 
                document.getElementById("card").classList.toggle("open")
                username.value = null;
                userCardNumber.value = null;
            }, 10000); // если да, то на 10 сек исчезает кнопка и появляется инфа об акке
            document.getElementById("form-before").reset();// clear       
    } else {
        alert('Not found user!');
    }  
});
})

// Копирование номера карты в профиле
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("copy-button").addEventListener('click', () => {
        window.navigator.clipboard.writeText(document.getElementById("card-number").innerText);
    })
})

//Logout
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("user-menu-link-logout").addEventListener("click", function(event) {
        window.localStorage.removeItem(StorageItems.LOGGED_USER);
        document.location.reload();
    })
})


/*console.log(`Library#2 Самооценка 50/50\n
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
ссылки в адаптивном меню работают, обеспечивая плавную прокрутку по якорям при нажатии, а само адаптивное меню при этом плавно скрывается +4`);*/



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
