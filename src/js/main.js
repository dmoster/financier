class User {
  constructor(name, income, expenses) {
    this.name = name;
    this.income = income;
    this.expenses = expenses
  }
}

class Income {
  constructor(name, frequency, amount) {
    this.name = name;
    this.frequency = frequency;
    this.amount = amount;
  }
}


let user = new User()
let instructions = document.getElementById('instructions')
let app = document.getElementById('app')

checkForUser()


function loadNew() {
  instructions.innerHTML =  '<p class="lead">Welcome!</p>' +
                            '<p>Let\'s start with some introductions. What\'s your name?</p>'
  app.innerHTML = '<form>' +
                    '<input id="name" type="text" placeholder="John" />' +
                    '<button type="button" onclick="addFirstIncome()">Next</button>' +
                  '</form>'
}

function addFirstIncome() {
  const name = document.getElementById('name').value
  user.name = name

  instructions.innerHTML =  `<p class="lead">Good to meet you, ${name}!</p>` +
                            '<p>How many streams of income do you have?</p>'
  app.innerHTML = '<form id="incomeAdder">' +
                    '<input id="numIncomeStreams" type="number" placeholder="0" min="0" step="1" />' +
                  '</form>' +
                  '<div id="incomeDetails"></div>'

  document.getElementById('numIncomeStreams').addEventListener('change', () => {
    let numStreams = document.getElementById('numIncomeStreams').value
    let incomeDetails = document.getElementById('incomeDetails')

    console.log(numStreams)

    if (numStreams == 0) {
      incomeDetails.innerHTML = ''
    }

    let i
    for (i = 0; i < numStreams; ++i) {

      if (i === 0) {
        incomeDetails.innerHTML = '<h2>Add Income Details</h2>'
      }
      incomeDetails.innerHTML +=  `<h3>Income ${i + 1}</h3>` +
                                  `<form id="income${i}">` +
                                    `<label for="incomeName${i}">Name</label>` +
                                    `<input id="incomeName${i}" type="text" placeholder="Paycheck" />` +
                                    `<label for="incomeFrequency${i}">Frequency</label>` +
                                    `<select id="incomeFrequency${i}">` +
                                      '<option value="everyWeek">Every week</option>' +
                                      '<option value="everyOtherWeek" selected>Every other week</option>' +
                                      '<option value="twiceAMonth">Twice a month</option>' +
                                      '<option value="monthly">Monthly</option>' +
                                      '<option value="quarterly">Quarterly</option>' +
                                    '</select>' +
                                    `<label for="incomeAmount${i}">Amount (USD)</label>` +
                                    `<input id="incomeAmount${i}" type="number" placeholder="2123.45" min="0" step="0.01" />` +
                                  '</form>'
    }
    document.getElementById('incomeAdder').innerHTML += '<button type="button" onclick="updateIncome(addExpenses)">Next</button>'
  })
}


function updateIncome(callback) {
  
  
  callback()
}


function addExpenses() {
  
}


function checkForUser() {
  loadNew()
  //!user.name ? loadNew() : showDashboard()
}