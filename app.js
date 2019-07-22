'use strict';
//try using military time instead 
var HOURS = ['0600', '0700', '0800', '0900', '1000', '1100', '1200', '1300', '1400', '1500', '1600', '1700', '1800', '1900'];

function Cookies(name, min, max, avg) {
    return {
    name: name,
    min: min,
    max: max,
    avg: avg,
    customersEachHour: [],
    cookiesEachHour: [],
    calcCustomersEachHour: function() {
        for (var i = 0; i < HOURS.length; i++) {
          this.customersEachHour.push(Math.random(this.min, this.max));
        }
      },
    calcCookiesEachHour: function() {
        for (var i = 0; i < this.customersEachHour.length; i++) {
          var oneHour = Math.ceil(this.customersEachHour[i] * this.avg);
          this.cookiesEachHour[i] = oneHour;
        }
      },
    render: function(tbody) {
        var tableRow = document.createElement('tr');
        var cell = document.createElement('td');
        cell.classList.add('location');
        cell.textContent = this.name;
        tableRow.appendChild(cell);
        for (var i = 0; i < this.customersEachHour.length; i++) {
           cell = document.createElement('td');
           cell.textContent = this.cookiesEachHour[i];
           tableRow.appendChild(cell);
        }
        console.log(tbody);
        tbody.appendChild(tableRow);
      }
    }
}

var stores = [
    new Cookies ('First and Pike',23,65,6.3),
    new Cookies ('SeaTac Airport',3,24,1.2),
    new Cookies ('Seattle Center',11,38,3.7),
    new Cookies ('Capitol Hill',20,38,2.3),
    new Cookies ('Alki',2,16,4.6)
];

for(var i = 0; i < stores.length; i++){
    stores[i].calcCustomersEachHour();
    stores[i].calcCookiesEachHour();
}

var table = document.getElementById('fishCookies');
var theader = document.createElement('thead');
var row = document.createElement('tr');


var th = document.createElement('th');
th.textContent = 'Location';
th.classList.add('location');
row.appendChild(th);

for (var i = 0; i < HOURS.length; i++) {
    th = document.createElement('th');
    th.textContent = HOURS[i];
    row.appendChild(th);
}

theader.appendChild(row);
table.appendChild(theader);

var tbody = document.createElement('tbody');
tbody.id = 'table-body';

for (var i = 0; i < stores.length; i++) {
    stores[i].render(tbody);
}

table.appendChild(tbody);
