

// function getData() {
//   var employeesDiv = document.getElementById('employees');

//   $.get('https://data.cityofchicago.org/resource/xzkq-xp2w.json', function(employees) {
//     console.log(employees);

//     var htmlString = "";
    
//     for (var i = 0; i < employees.length; i++) {
//       var employee = employees[i];
//       htmlString += '<div class="employee" onclick=changeEmployee(this)>';
//       htmlString += '<h2>' + employee.name + '</h2>';
//       htmlString += '</div>';
//     }


//     employeesDiv.innerHTML = htmlString;
//   });
// }

// function changeEmployee(employeeDiv) {

//     employeeDiv.style.color = "lightgray";
// }

// function showAll() {
//   var employess = document.getElementByClassName('employee');

//   for (var i = 0; i < employess.length; i++) {
//     var employee = employees[i];
//     employee.classList.remove('hidden');
//   }
// }

// function showPolice() {
//   var employees = document.getElementByClassName('employee');

//   for (var i = 0; i < employess.length; i++) {
//     var employee = employees[i];
//     if (employee.innerHTML.indexOf('POLICE') !== -1) {
//       employee.classList.remove('hidden');
//     }
//     else {
//       employee.classList.add('hidden')
//     }
//   }
// }


function getAllData() {
  var crimesDiv = document.getElementById('crime');

  $.get('https://data.cityofchicago.org/resource/6zsd-86xi.json?$limit=1000', function(crimes) {

    var htmlString = "";

    for (var i = 0; i < crimes.length; i++) {
      var crime = crimes[i];
      htmlString += '<div class="crime" onclick="changeCrime(this)">'
      htmlString += '<h2>' + crime.description + '<h2>';
      htmlString += '</div>'
    }
    crimesDiv.innerHTML = htmlString;
  });
}

function show420() {
  var crimes = document.getElementsByClassName('crime');

  for (var i = 0; i < crimes.length; i++) {
    var crime = crimes[i];
    console.log(crime);

    if (crime.innerHTML.indexOf('10GM OR LESS') !== -1) {
      crime.classList.remove('hidden');
    }
    else {
      crime.classList.add('hidden');
    }
  }
}