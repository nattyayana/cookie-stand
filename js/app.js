'use strict';


var allStores = [];
var storeHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm' , '8pm'];

var storeTable= document.getElementById('store');

function Store(storeLocation, minCust, maxCust, custAvgSale) {
  this.storeLocation = storeLocation;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.custAvgSale = custAvgSale;
  this.hourlyCookieSales = [];
  allStores.push(this);
}

Store.prototype.render = function () {

  var trElement = document.createElement('tr');
  var tdElement = document.createElement('td');
  tdElement.textContent = this.storeLocation;
  trElement.appendChild(tdElement);


  tdElement = document.createElement('td');
  tdElement.textContent = this.minCust;
  trElement.appendChild(tdElement);



  tdElement = document.createElement('td');
  tdElement.textContent = this.maxCust;
  trElement.appendChild(tdElement);



  tdElement = document.createElement('td');
  tdElement.textContent = this.custAvgSale;
  trElement.appendChild(tdElement);


  storeTable.appendChild(trElement);
};

// We need to create our Dog instances
var pike = new Store('1st and Pike', 23, 65, 6.3);
var seatac = new Store('Seatac Airport', 3, 24, 1.2);
var seattlecenter = new Store('Seattle Center', 11, 38, 3.7);
var capitiolhill = new Store('Capitol Hill', 20, 38, 2.3);
var alki = new Store('Alki Beach', 2, 16, 4.6);
console.log(allStores);





// // First And Pike Location

// var storeHours= ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm' , '8pm'];

// var firstandpike = {
//   storeLocation: '1st & Pike',
//   minCust: 23,
//   maxCust: 65,
//   custAvgSale: 6.3,
//   cookieTotal: 0,
//   salePerHour: function(){


//     this.projections.push(randomNum);

//     var firstandpikeContainer = document.getElementById('firstandpike');

//     for( var i=0; i < storeHours.length; i++ ) {
//       var randomNumCustomer = ((Math.random() * (this.maxCust - this.minCust) + this.minCust))*this.custAvgSale;
//       var randomNum =  Math.round(randomNumCustomer);
//       var teamElement = document.createElement('li');
//       teamElement.textContent = storeHours[i] + ':' + randomNum + 'cookies';
//       this.cookieTotal += randomNum;
//       firstandpikeContainer.appendChild(teamElement);

//     }
//     teamElement.textContent = 'Total:' + this.cookieTotal;
//   }
// };


// firstandpike.salePerHour();
// console.log(firstandpike);













// // SeaTac Airport Location.

// var seatacairport = {
//   storeLocation: 'SeaTac Airport',
//   projections:[],
//   minCust: 3,
//   maxCust: 24,
//   custAvgSale: 1.2,
//   cookieTotal: 0,
//   salePerHour: function(){

//     this.projections.push(randomNum);

//     var seatacairportContainer = document.getElementById('seatacairport');

//     for( var i=0; i < storeHours.length; i++ ) {
//       var randomNumCustomer = ((Math.random() * (this.maxCust - this.minCust) + this.minCust))*this.custAvgSale;
//       var randomNum =  Math.round(randomNumCustomer);
//       var teamElement = document.createElement('li');
//       teamElement.textContent = storeHours[i] + ':' + randomNum + 'cookies';
//       this.cookieTotal += randomNum;
//       seatacairportContainer.appendChild(teamElement);
//     }
//     teamElement.textContent = 'Total:' + this.cookieTotal;
//   }
// };

// seatacairport.salePerHour();
// console.log(seatacairport);


// //Seattle Center Location.

// var seattlecenter = {
//   storeLocation: 'Seattle Center',
//   projections:[],
//   minCust: 11,
//   maxCust: 38,
//   custAvgSale: 3.7,
//   cookieTotal: 0,
//   salePerHour: function(){

//     this.projections.push(randomNum);

//     var seattlecenterContainer = document.getElementById('seattlecenter');

//     for( var i=0; i < storeHours.length; i++ ) {
//       var randomNumCustomer = ((Math.random() * (this.maxCust - this.minCust) + this.minCust))*this.custAvgSale;
//       var randomNum =  Math.round(randomNumCustomer);
//       var teamElement = document.createElement('li');
//       teamElement.textContent = storeHours[i] + ':' + randomNum + 'cookies';
//       this.cookieTotal += randomNum;
//       seattlecenterContainer.appendChild(teamElement);
//     }
//     teamElement.textContent = 'Total:' + this.cookieTotal;
//   }
// };

// seattlecenter.salePerHour();
// console.log(seattlecenter);


// //Capitol Hill Location.

// var capitolhill = {
//   storeLocation: 'Capitol Hill',
//   projections:[],
//   minCust: 11,
//   maxCust: 38,
//   custAvgSale: 3.7,
//   cookieTotal: 0,
//   salePerHour: function(){

//     this.projections.push(randomNum);

//     var capitolhillContainer = document.getElementById('capitolhill');

//     for( var i=0; i < storeHours.length; i++ ) {
//       var randomNumCustomer = ((Math.random() * (this.maxCust - this.minCust) + this.minCust))*this.custAvgSale;
//       var randomNum =  Math.round(randomNumCustomer);
//       var teamElement = document.createElement('li');
//       teamElement.textContent = storeHours[i] + ':' + randomNum + 'cookies';
//       this.cookieTotal += randomNum;
//       capitolhillContainer.appendChild(teamElement);
//     }
//     teamElement.textContent = 'Total:' + this.cookieTotal;
//   }
// };

// capitolhill.salePerHour();
// console.log(capitolhill);





// // Alki Store Location.

// var alki = {
//   storeLocation: 'Alki',
//   projections:[],
//   minCust: 11,
//   maxCust: 38,
//   custAvgSale: 3.7,
//   cookieTotal: 0,
//   salePerHour: function(){

//     this.projections.push(randomNum);

//     var alkiContainer = document.getElementById('alki');

//     for( var i=0; i < storeHours.length; i++ ) {
//       var randomNumCustomer = ((Math.random() * (this.maxCust - this.minCust) + this.minCust))*this.custAvgSale;
//       var randomNum =  Math.round(randomNumCustomer);
//       var teamElement = document.createElement('li');
//       teamElement.textContent = storeHours[i] + ':' + randomNum + 'cookies';
//       this.cookieTotal += randomNum;
//       alkiContainer.appendChild(teamElement);
//     }
//     teamElement.textContent = 'Total:' + this.cookieTotal;
//   }
// };

// alki.salePerHour();
// console.log(alki);


