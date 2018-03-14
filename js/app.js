'use strict';

// We need an array to hold our dogs
var allStores = [];


var storeHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm' , '8pm'];

// We need to access the table that is in the DOM
var storeTable= document.getElementById('store');


// We need a constructor to make our dog objects
function Store(storeLocation, minCust, maxCust, avgCookieSale) {
  this.store = storeLocation;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgSale = avgCookieSale;
  this.hourlyCookieSales = [];
  this.dayTotals = 0;
  allStores.push(this);
}

// Make the table header
function makeHeaderRow() {

  var headerTrElement = document.createElement('tr');
  var thElement = document.createElement('th');

  thElement.textContent = 'storeLocation';
  headerTrElement.appendChild(thElement);

  for ( var i = 0; i < storeHours.length; i++) {

    thElement = document.createElement('th');
    thElement.textContent = storeHours[i];
    headerTrElement.appendChild(thElement);

  }

  thElement = document.createElement('th');
  thElement.textContent = 'Day Total';
  headerTrElement.appendChild(thElement);
  storeTable.appendChild(headerTrElement);

}
makeHeaderRow();


var StoreConstructor = function ( storeLocation, minCust, maxCust, avgCookieSale) {

  this.store = storeLocation;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgSale = avgCookieSale;
  this.hourlyCookieSales = [];
  this.dayTotals = 0;
  allStores.push(this);


};


StoreConstructor.prototype.hourlyCookieSales = function () {

  var dayTotals = 0;




}


// // Render the dogs in the table
// Store.prototype.render = function () {
//   var trElement = document.createElement('tr');

//   var tdElement = document.createElement('td');
//   tdElement.textContent = this.store;
//   trElement.appendChild(tdElement);

//   tdElement = document.createElement('td');
//   tdElement.textContent = this.minCust;
//   trElement.appendChild(tdElement);

//   tdElement = document.createElement('td');
//   tdElement.textContent = this.maxCust;
//   trElement.appendChild(tdElement);

//   tdElement = document.createElement('td');
//   tdElement.textContent = this.avgSale;
//   trElement.appendChild(tdElement);

//   storeTable.appendChild(trElement);

// };

// // We need to create our Dog instances

// var pike = new Store('1st and Pike', 23, 65, 6.3);


// var seatac = new Store('Seatac Airport', 3, 24, 1.2);


// var seattlecenter = new Store('Seattle Center', 11, 38, 3.7);


// var capitiolhill = new Store('Capitol Hill', 20, 38, 2.3);


// var alki = new Store('Alki Beach', 2, 16, 4.6);










// // step 3
// storeHours.prototype.hourlyCookieSales = function ( ) {

// var dayTotals = 0;





// };

// // step 4
// Store.prototype.render = function () {


//   // create tr
//   var trElement = document.createElement('tr');
//   // create td
//   var tdElement = document.createElement('td');
//   // give td content (name, then color, then breed, the nickname) <- eventually do it in a for loop
//   tdElement.textContent = this.name;
//   // append td to tr
//   trElement.appendChild(tdElement);



//   trElement = document.createElement('tr');
//   tdElement = document.createElement('td');
//   tdElement.textContent = this.storeLocation;
//   trElement.appendChild(tdElement);




//   storeTable.appendChild(trElement);
// };






// console.log(allStores);





//step6 

function renderAlldogs (){ 
  for (var I in allDogs);





}





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


