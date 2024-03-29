var MainButton = WebApp.MainButton;
var BackButton = WebApp.BackButton;

MainButton.show();
BackButton.show();

MainButton.onClick(function() {
  WebApp.showAlert("Хорошо, ты нажал на главную кнопку.");
});
WebApp.onEvent('mainButtonClicked', function() {
  /* also */
});

BackButton.onClick(function() {
  WebApp.showAlert("Нет пути назад!");
  
  BackButton.hide();
});
WebApp.onEvent('backButtonClicked', function() {
  /* also */
});


var buttons = document.querySelectorAll(".but");
for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function() {
    var prevButton = document.querySelector(".but.animate");
    if (prevButton) {
      prevButton.classList.remove("animate"); // Удалить класс "animate" с предыдущей кнопки
    }
    this.classList.add("animate"); // Добавить класс "animate" к нажатой кнопке
    //  disableAnimation(buttons, this);
  });
}

function disableAnimation(buttons, activeButton) {
  for (var i = 0; i < buttons.length; i++) {
    if (buttons[i] !== activeButton) { // Отключение анимации для остальных кнопок
      buttons[i].style.animation = "none";
    }
}
}

  setTimeout(function() {
    for (var i = 0; i < buttons.length; i++) {
      if (buttons[i] !== activeButton) {
        buttons[i].style.animation = ""; // Включение анимации обратно после небольшой задержки
      }
    }
  }, 0); // Задержка в 500 миллисекунд (можно изменить значение по вашему усмотрению)

// window.onscroll = function() {
//   var button = document.getElementById("b");
//   if (window.pageYOffset > 5) { // Здесь вы можете настроить величину прокрутки, при которой кнопка будет двигаться
//     button.style.top = "10px";
//   } else {
//     button.style.top = "20px";
//   }
// };
