'use strict';
//try using military time instead 
var hours = ['0600', '0700', '0800', '0900', '1000', '1100', '1200', '1300', '1400', '1500', '1600', '1700', '1800', '1900'];

var pikePlace = {
  locationName: 'Pike Place Market',
  minCustomersPerHour: 23,
  maxCustomersPerHour: 65,
  avgCookiesPerSale: 6.3,
  customersEachHour: [],
  cookiesEachHour: [],
  totalDailyCookies: 0,
  calcCustomersEachHour: function() {
    for (var i = 0; i < hours.length; i++) {
      this.customersEachHour.push(Math.random(this.minCustomersPerHour, this.maxCustomersPerHour));
    }
  },
  calcCookiesEachHour: function() {
    this.calcCustomersEachHour();
    for (var i = 0; i < hours.length; i++) {
      var oneHour = Math.ceil(this.customersEachHour[i] * this.avgCookiesPerSale);
      this.cookiesEachHour.push(oneHour);
      this.totalDailyCookies += oneHour;
    }
  },
  render() {
    this.calcCookiesEachHour();
    var theUL = document.getElementById('pike');
    for (var i = 0; i < hours.length; i++) {
      var liEl = document.createElement('li');
      liEl.textContent = hours[i] + ': ' + this.cookiesEachHour[i] + ' cookies';
      theUL.appendChild(liEl);
    }
    liEl = document.createElement('li');
    liEl.textContent = 'Total: ' + this.totalDailyCookies + ' cookies';
    theUL.appendChild(liEl);
  }
};

var seaTac={
    locationName: 'SeaTac Airport',
    minCustomersPerHour:3,
    maxCustomersPerHour:24,
    avgCookiesPerSale:1.2,
    customersEachHour: [],
  cookiesEachHour: [],
  totalDailyCookies: 0,
  calcCustomersEachHour: function() {
    for (var i = 0; i < hours.length; i++) {
      this.customersEachHour.push(Math.random(this.minCustomersPerHour, this.maxCustomersPerHour));
    }
  },
  calcCookiesEachHour: function() {
    this.calcCustomersEachHour();
    for (var i = 0; i < hours.length; i++) {
      var oneHour = Math.ceil(this.customersEachHour[i] * this.avgCookiesPerSale);
      this.cookiesEachHour.push(oneHour);
      this.totalDailyCookies += oneHour;
    }
  },
  render() {
    this.calcCookiesEachHour();
    var theUL = document.getElementById('SeaTac');
    for (var i = 0; i < hours.length; i++) {
      var liEl = document.createElement('li');
      liEl.textContent = hours[i] + ': ' + this.cookiesEachHour[i] + ' cookies';
      theUL.appendChild(liEl);
    }
    liEl = document.createElement('li');
    liEl.textContent = 'Total: ' + this.totalDailyCookies + ' cookies';
    theUL.appendChild(liEl);
  }
}
var seattleCenter={
    locationName: 'Seattle Center',
    minCustomersPerHour:11,
    maxCustomersPerHour:38,
    avgCookiesPerSale:3.7,
    customersEachHour: [],
  cookiesEachHour: [],
  totalDailyCookies: 0,
  calcCustomersEachHour: function() {
    for (var i = 0; i < hours.length; i++) {
      this.customersEachHour.push(Math.random(this.minCustomersPerHour, this.maxCustomersPerHour));
    }
  },
  calcCookiesEachHour: function() {
    this.calcCustomersEachHour();
    for (var i = 0; i < hours.length; i++) {
      var oneHour = Math.ceil(this.customersEachHour[i] * this.avgCookiesPerSale);
      this.cookiesEachHour.push(oneHour);
      this.totalDailyCookies += oneHour;
    }
  },
  render() {
    this.calcCookiesEachHour();
    var theUL = document.getElementById('Seattle Center');
    for (var i = 0; i < hours.length; i++) {
      var liEl = document.createElement('li');
      liEl.textContent = hours[i] + ': ' + this.cookiesEachHour[i] + ' cookies';
      theUL.appendChild(liEl);
    }
    liEl = document.createElement('li');
    liEl.textContent = 'Total: ' + this.totalDailyCookies + ' cookies';
    theUL.appendChild(liEl);
  }
}
var capitolHill={
    locationName: 'Capitol Hill',
    minCustomersPerHour:20,
    maxCustomersPerHour:38,
    avgCookiesPerSale:2.3,
    customersEachHour: [],
  cookiesEachHour: [],
  totalDailyCookies: 0,
  calcCustomersEachHour: function() {
    for (var i = 0; i < hours.length; i++) {
      this.customersEachHour.push(Math.random(this.minCustomersPerHour, this.maxCustomersPerHour));
    }
  },
  calcCookiesEachHour: function() {
    this.calcCustomersEachHour();
    for (var i = 0; i < hours.length; i++) {
      var oneHour = Math.ceil(this.customersEachHour[i] * this.avgCookiesPerSale);
      this.cookiesEachHour.push(oneHour);
      this.totalDailyCookies += oneHour;
    }
  },
  render() {
    this.calcCookiesEachHour();
    var theUL = document.getElementById('capitolHill');
    for (var i = 0; i < hours.length; i++) {
      var liEl = document.createElement('li');
      liEl.textContent = hours[i] + ': ' + this.cookiesEachHour[i] + ' cookies';
      theUL.appendChild(liEl);
    }
    liEl = document.createElement('li');
    liEl.textContent = 'Total: ' + this.totalDailyCookies + ' cookies';
    theUL.appendChild(liEl);
  }
}
var alki={
    locationName: 'Alki',
    minCustomersPerHour:2,
    maxCustomersPerHour:16,
    avgCookiesPerSale:4.6,
    customersEachHour: [],
  cookiesEachHour: [],
  totalDailyCookies: 0,
  calcCustomersEachHour: function() {
    for (var i = 0; i < hours.length; i++) {
      this.customersEachHour.push(Math.random(this.minCustomersPerHour, this.maxCustomersPerHour));
    }
  },
  calcCookiesEachHour: function() {
    this.calcCustomersEachHour();
    for (var i = 0; i < hours.length; i++) {
      var oneHour = Math.ceil(this.customersEachHour[i] * this.avgCookiesPerSale);
      this.cookiesEachHour.push(oneHour);
      this.totalDailyCookies += oneHour;
    }
  },
  render() {
    this.calcCookiesEachHour();
    var theUL = document.getElementById('alki');
    for (var i = 0; i < hours.length; i++) {
      var liEl = document.createElement('li');
      liEl.textContent = hours[i] + ': ' + this.cookiesEachHour[i] + ' cookies';
      theUL.appendChild(liEl);
    }
    liEl = document.createElement('li');
    liEl.textContent = 'Total: ' + this.totalDailyCookies + ' cookies';
    theUL.appendChild(liEl);
  }
}


//create variable to hold all shops and assign an empty array
var allShops = [pikePlace, seaTac, seattleCenter, capitolHill, alki ];//add my stores

 (function renderAllShops() {
  for(var i = 0; i < allShops.length; i++){
    allShops[i].render();
  }
})();

var locationName = new Object();
locationName.name = [];
locationName.minCustomersPerHour = [];
locationName.maxCustomersPerHour = [];
locationName.avgCookiesPerSale = [];
