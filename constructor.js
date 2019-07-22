'use strict';
//try using military time instead 
var hours = ['0600', '0700', '0800', '0900', '1000', '1100', '1200', '1300', '1400', '1500', '1600', '1700', '1800', '1900'];

//stores
var stores = [
    new Cookies ('First and Pike',23,65,6.3),
    new Cookies ('SeaTac Airport',3,24,1.2),
    new Cookies ('Seattle Center',11,38,3.7),
    new Cookies ('Capitol Hill',20,38,2.3),
    new Cookies ('Alki',2,16,4.6)
];

function Cookies(locationName, minCustomersPerHour,maxCustomersPerHour, avgCookiesPerSale){
    this.locationName = locationName,
    this.minCustomersPerHour = minCustomersPerHour,
    this.maxCustomersPerHour = minCustomersPerHour,
    this.avgCookiesPerSale = avgCookiesPerSale,
    this.customersEachHour = [],
    this.cookiesEachHour = [],
    this.totalDailyCookies= [],
}
Cookies.prototype.calcCustomersEachHour = function(){
    this.customersEachHour.push(Math.floor()*(this.customersEachHour[i]*this.avgCookiesPerSale));

};
