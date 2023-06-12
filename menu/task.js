var menuLinks = document.querySelectorAll('.menu__link');

menuLinks.forEach(function(link) {
  link.addEventListener('click', function(event) {
    var submenu = link.nextElementSibling;
    var activeSubMenu = document.querySelector('.menu_active'); // Находим активное вложенное меню

    if (submenu && submenu.classList.contains('menu_sub')) {
      event.preventDefault();

      // Скрываем все остальные вложенные меню
      document.querySelectorAll('.menu_sub').forEach(function(item) {
        if (item !== submenu) {
          item.classList.remove('menu_active');
        }
      });

      // Переключаем класс menu_active у текущего вложенного меню
      submenu.classList.toggle('menu_active');
    }

    // Если есть активное вложенное меню и оно не равно текущему, скрываем его
    if (activeSubMenu && activeSubMenu !== submenu) {
      activeSubMenu.classList.remove('menu_active');
    }
  });
});