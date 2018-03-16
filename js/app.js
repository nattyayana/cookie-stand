'use strict';

// We need an array to hold our dogs
var allStores = [];


var storeHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm' , '8pm'];

// We need to access the table that is in the DOM
var storeTable= document.getElementById('store');


// Access the form so we can attach an event listener
var storeForm = document.getElementById('store-form');

// We need a constructor to make our dog objects
function Store(storeLocation, minCust, maxCust, avgCookieSale) {
  this.store = storeLocation;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgSale = avgCookieSale;
  this.hourlyCookieSales = [];

  //this.calculatehoursale();
  this.dayTotals = '';



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



Store.prototype.creatingCookieSales = function () {

  var dayTotal = 0;

  for ( var i = 0; i < storeHours.length; i++) {

    var cusRandomNum = (Math.random() * (this.maxCust - this.minCust) + (this.minCust));

    var hourlyCookieSales = (Math.floor(cusRandomNum * this.avgSale));

    dayTotal += hourlyCookieSales;

    this.hourlyCookieSales.push(hourlyCookieSales);

  }
  this.dayTotals = dayTotal;

};


Store.prototype.render = function () {


  var trElement = document.createElement('tr');

  var tdElement = document.createElement('td');

  tdElement.textContent = this.store;

  trElement.appendChild(tdElement);


  for ( var i = 0; i < storeHours.length; i++) {

    tdElement = document.createElement('td');

    tdElement.textContent = this.hourlyCookieSales[i];

    trElement.appendChild(tdElement);

  }

  tdElement = document.createElement('td');

  tdElement.textContent = this.dayTotals;

  trElement.appendChild(tdElement);

  storeTable.appendChild(trElement);

};

// var grandTotal = function() {
//   var dayTotals =0;
//   for(var i = 0; i<grandTotal.length;i++) {
//     dayTotals=dayTotals+grandTotal[i];
//   }
//   return dayTotals;

// };


new Store('1st and Pike', 23, 65, 6.3);
new Store('Seatac Airport', 3, 24, 1.2);
new Store('Seattle Center', 11, 38, 3.7);
new Store('Capitol Hill', 20, 38, 2.3);
new Store('Alki Beach', 2, 16, 4.6);


// // It would be nice to have a single function that renders all of the individual dog rows...
function callCookieSalesOnAllStores () {
  for(var i in allStores) {
    allStores[i].creatingCookieSales();
  }
}

function renderallStores() {
  for(var i in allStores) {
    allStores[i].render();
  }
}

// event listener's callback function
function addNewStore(event){
  event.preventDefault();
  console.log(event.target.store.value);

  var newStoreLocation = event.target.store.value;
  var newMinCust = event.target.minCust.value;
  var newMaxCust = event.target.maxCust.value;
  var newAvgCookieSale = event.target.avgCookieSale.value;

  new Store(newStoreLocation, newMinCust, newMaxCust, newAvgCookieSale);

  storeTable.innerHTML = '';
  makeHeaderRow();
  callCookieSalesOnAllStores();
  renderallStores();
  makeFooterRow();
}

// add event listener
storeForm.addEventListener('submit', addNewStore);


callCookieSalesOnAllStores();
renderallStores();



function makeFooterRow() {

  var footerTrElement = document.createElement('tr');
  var thElement = document.createElement('th');
  thElement.textContent = 'Total';
  footerTrElement.appendChild(thElement);

  for ( var i = 0; i < storeHours.length; i++) {
    thElement = document.createElement('th');

    thElement.textContent = 0 [i];

    footerTrElement.appendChild(thElement);

  }

  thElement = document.createElement('th');
  thElement.textContent = (0);
  footerTrElement.appendChild(thElement);

  storeTable.appendChild(footerTrElement);

}

makeFooterRow();



