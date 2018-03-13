// DONE Stores the min/max hourly customers, and the average cookies per customer, in object properties

// DONE  Uses a method of that object to generate a random number of customers per hour. Objects/Math/random

// Done Calculate and store the simulated amounts of cookies purchased for each hour at each location using average cookies purchased and the random number of customers generated

// Done Store the results for each location in a separate array... perhaps as a property of the object representing that location
// Done Display the values of each array as unordered lists in the browser


// First and Pike Location.

var storeHours= ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
var firstandpike = {
  storeLocation: '1st & Pike',
  projections:[],
  minCust: 23,
  maxCust: 65,
  custAvgSale: 6.3,
  salePerHour: function(){
    var randomNumCustomer = ((Math.random() * (this.maxCust - this.minCust) + this.minCust))*this.custAvgSale;
    var randomNum =  Math.round(randomNumCustomer);
    this.projections.push(randomNum);

    var firstandpikeContainer = document.getElementById('firstandpike');

    for( var i=0; i < storeHours.length; i++ ) {
      var teamElement = document.createElement('li');
      teamElement.textContent = storeHours[i] + ':' + randomNum + 'cookies';
      firstandpikeContainer.appendChild(teamElement);
    }

  }
};

firstandpike.salePerHour();
console.log(firstandpike);


// SeaTac Airport Location.

var seatacairport = {
  storeLocation: 'SeaTac Airport',
  projections:[],
  minCust: 3,
  maxCust: 24,
  custAvgSale: 1.2,
  salePerHour: function(){
    var randomNumCustomer = ((Math.random() * (this.maxCust - this.minCust) + this.minCust))*this.custAvgSale;
    var randomNum =  Math.round(randomNumCustomer);
    this.projections.push(randomNum);

    var seatacairportContainer = document.getElementById('seatacairport');

    for( var i=0; i < storeHours.length; i++ ) {
      var teamElement = document.createElement('li');
      teamElement.textContent = storeHours[i] + ':' + randomNum + 'cookies';
      seatacairportContainer.appendChild(teamElement);
    }

  }
};

seatacairport.salePerHour();
console.log(seatacairport);


//Seattle Center Location.

var seattlecenter = {
  storeLocation: 'Seattle Center',
  projections:[],
  minCust: 11,
  maxCust: 38,
  custAvgSale: 3.7,
  salePerHour: function(){
    var randomNumCustomer = ((Math.random() * (this.maxCust - this.minCust) + this.minCust))*this.custAvgSale;
    var randomNum =  Math.round(randomNumCustomer);
    this.projections.push(randomNum);

    var seattlecenterContainer = document.getElementById('seattlecenter');

    for( var i=0; i < storeHours.length; i++ ) {
      var teamElement = document.createElement('li');
      teamElement.textContent = storeHours[i] + ':' + randomNum + 'cookies';
      seattlecenterContainer.appendChild(teamElement);
    }

  }
};

seattlecenter.salePerHour();
console.log(seattlecenter);


//Capitol Hill Location.

var capitolhill = {
  storeLocation: 'Capitol Hill',
  projections:[],
  minCust: 11,
  maxCust: 38,
  custAvgSale: 3.7,
  salePerHour: function(){
    var randomNumCustomer = ((Math.random() * (this.maxCust - this.minCust) + this.minCust))*this.custAvgSale;
    var randomNum =  Math.round(randomNumCustomer);
    this.projections.push(randomNum);

    var capitolhillContainer = document.getElementById('capitolhill');

    for( var i=0; i < storeHours.length; i++ ) {
      var teamElement = document.createElement('li');
      teamElement.textContent = storeHours[i] + ':' + randomNum + 'cookies';
      capitolhillContainer.appendChild(teamElement);
    }

  }
};

capitolhill.salePerHour();
console.log(capitolhill);





// Alki Store Location.

var alki = {
  storeLocation: 'Alki',
  projections:[],
  minCust: 11,
  maxCust: 38,
  custAvgSale: 3.7,
  salePerHour: function(){
    var randomNumCustomer = ((Math.random() * (this.maxCust - this.minCust) + this.minCust))*this.custAvgSale;
    var randomNum =  Math.round(randomNumCustomer);
    this.projections.push(randomNum);

    var alkiContainer = document.getElementById('alki');

    for( var i=0; i < storeHours.length; i++ ) {
      var teamElement = document.createElement('li');
      teamElement.textContent = storeHours[i] + ':' + randomNum + 'cookies';
      alkiContainer.appendChild(teamElement);
    }

  }
};

alki.salePerHour();
console.log(alki);


