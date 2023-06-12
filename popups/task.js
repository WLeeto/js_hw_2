document.addEventListener('DOMContentLoaded', function() {
    var modalMain = document.getElementById('modal_main')
    var modalSuccess = document.getElementById('modal_success')
    var modalCloseButtons = document.querySelectorAll('.modal__close')
    var showSuccessButton = document.querySelector('.show-success')
  
    modalMain.classList.add('modal_active')
  
    // Функция для закрытия активного окна
    function closeModal() {
      modalMain.classList.remove('modal_active')
      modalSuccess.classList.remove('modal_active')
    }
  
    // Закрытие окна по клику на элементы с классом modal__close
    modalCloseButtons.forEach(function(button) {
      button.addEventListener('click', closeModal)
    });
  
    // Показ окна modal_success по клику на элемент с классом show-success
    showSuccessButton.addEventListener('click', function(event) {
      event.preventDefault()
      modalMain.classList.remove('modal_active')
      modalSuccess.classList.add('modal_active')
    })
  })



