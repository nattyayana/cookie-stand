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


var pike = new Store('1st and Pike', 23, 65, 6.3);
pike.creatingCookieSales();
pike.render();

var seatac = new Store('Seatac Airport', 3, 24, 1.2);
seatac.creatingCookieSales();
seatac.render();

var seattlecenter = new Store('Seattle Center', 11, 38, 3.7);
seattlecenter.creatingCookieSales();
seattlecenter.render();

var capitiolhill = new Store('Capitol Hill', 20, 38, 2.3);
capitiolhill.creatingCookieSales();
capitiolhill.render();

var alki = new Store('Alki Beach', 2, 16, 4.6);
alki.creatingCookieSales();
alki.render();





// UNCOMMENT BELLOW TO SEE WHERE I REALLY STOPPED AT



// // It would be nice to have a single function that renders all of the individual dog rows...
// function renderAllStores() {
//   for(var i in allStores) {
//     allStores[i].render();
//   }
// }


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
//   tdElement.textContent = this.hourlyCookieSales;
//   trElement.appendChild(tdElement);

//   storeTable.appendChild(trElement);
// };



// event listener's callback function
function addNewStore(event){
  event.preventDefault();
  console.log(event.target.store.value);

  var newStoreLocation = event.target.newStoreLocation.value;
  var newMinCust = event.target.newMinCust.value;
  var newMaxCust = event.target.newMaxCust.value;
  var newAvgCookieSale = event.target.newAvgCookieSale.value;

  new Store(newStoreLocation, newMinCust, newMaxCust, newAvgCookieSale);

  storeTable.innerHTML = '';
  makeHeaderRow();
  renderAllStores();
}

// add event listener
storeForm.addEventListener('submit', addNewStore);

// Now we need to call our functions
makeHeaderRow();
renderAllStores();