function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  };
  
  createDaysOfTheWeek();
  
  // Escreva seu código abaixo.

  const dezDaysList = [
    29, 30, 01, 02, 03, 04, 05, 06, 07, 08, 09, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31
  ]

  //1

   function daysOfMonth() {
     let classDay = document.querySelector('#days')

     for (let index = 0; index < dezDaysList.length; index++) {
       let day = dezDaysList[index]
       let li = document.createElement('li')
       li.innerText = day
       classDay.appendChild(li)
       li.className = 'day'

       if (day == 24 || day == 25 || day ==31) {
         li.classList.add('holiday')
       }
        if (day == 4 || day == 11 || day == 18 || day == 25) {
          li.classList.add('friday')
        }
     }
   }
  daysOfMonth()

  //2

  function buttonHoliday(holiday) {
    let buttonClass = document.querySelector('.buttons-container')
    let newButton = document.createElement ('button')
    newButton.innerText = holiday
    newButton.id = 'btn-holiday'
    buttonClass.appendChild(newButton)
  }
  buttonHoliday('Feriados')

  //3

  function colorHoliday() {
    let btnHoliday = document.querySelector ('#btn-holiday')
    let allHoliday = document.querySelectorAll ('.holiday')

    btnHoliday.addEventListener('click', function colorHoliday() {
      for (let i = 0; i < allHoliday.length; i++) {
        if (allHoliday[i].style.backgrouendColor == 'white') {
          allHoliday[i].style.backgrouendColor = 'rgb(238,238,238)'
          allHoliday[i].style.border = 'none'
          allHoliday[i].style.color = '#777'
        } else {
          allHoliday[i].style.backgrouendColor = 'rgb(238,238,238)'
          allHoliday[i].style.border = '1px solid gray'
          allHoliday[i].style.borderRadius = '5px'
          allHoliday[i].style.color = '#777'
        }
      }
    })
  }
  colorHoliday()

  //4

  function buttonFriday(friday) {
    let buttonClass = document.querySelectorAll('.buttons-container')
    let fridayButton = document.createElemnt('button')
    fridayButton.innerText = friday
    fridayButton.id = 'btn-friday'
    buttonClass.appendChild(fridayButton)
  }
  buttonFriday('Sexta-Feira')

  

  