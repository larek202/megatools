// **если этот файл загружен в начале страницы, уберите коммент снизу**
// document.addEventListener('DOMContentLoaded', function () {

// выбор формы по айди
const form = document.getElementById('myForm');

// смотрим за нажатием на кнопку
form.addEventListener('submit', formSend);


// функция отправка формы
async function formSend(e) {
  e.preventDefault();

  //создаем объект с данными из формы и заносим его в константу
  const formData = new FormData(form);

  // отправляем форму и заносим ответ в константу
  const response = await fetch('send.php', {
    method: 'POST',
    body: formData
  });

  // действия при полученном ответе от php файла
  if (response.ok) {

    // расшифровываем полученный json из php файла и заносим его данные в константу
    const result = await response.json();


    // действия, если сообщения было отправлено
    if (result.message === 'sended') {
      form.reset();
      alert('Wiadomość została wysłana');

      // действия, если сообщение не было отправлено 
    } else {
      form.reset();
      alert('Wiadomość nie została wysłana, spróbuj ponownie');
    };


    // действия, если не получили ответа от php
  } else {
    form.reset();
    alert('Brak odpowiedźi');
  };

};
// });