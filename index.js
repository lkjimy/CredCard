var currentDate = new Date();
var currentYear = currentDate.getFullYear();
var currentMonth = currentDate.getMonth();

var elMonthSelect = document.getElementById('monthSelect');
var elYearSelect = document.getElementById('yearSelect');

// Generate the years for the due date select
for (var i = currentYear ; i <= currentYear + 10 ; i++ ) {
  var elOption = document.createElement('option');
  elOption.value = `${i}`
  elOption.text = `${i}`

  if (i === currentYear) {
    elOption.defaultSelected = true
  }

  elYearSelect.appendChild(elOption);
}

// Generate the months for the due date select
for (var i = 1 ; i <= 12 ; i++ ) {
  var elOption = document.createElement('option');
  elOption.value = `${i}`
  elOption.text = `${i}`
  
  if (i === currentMonth + 1) {
    elOption.defaultSelected = true
  }

  elMonthSelect.appendChild(elOption);
}

function updateContent (source, target) {
  let el = document.getElementById(target)
  el.innerHTML = source.value
}

function addAnimationClass (target) {
  let el = document.getElementsByClassName(target)
  el.classList.add('turnAround')
}