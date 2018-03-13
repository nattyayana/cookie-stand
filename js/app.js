// DONE Stores the min/max hourly customers, and the average cookies per customer, in object properties

// DONE  Uses a method of that object to generate a random number of customers per hour. Objects/Math/random

// Done Calculate and store the simulated amounts of cookies purchased for each hour at each location using average cookies purchased and the random number of customers generated

// Done Store the results for each location in a separate array... perhaps as a property of the object representing that location
// Done Display the values of each array as unordered lists in the browser


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

    for( var i=0; 'i' < storeHours.length; i++ ) {
      var teamElement = document.createElement('li');
      teamElement.textContent = storeHours[i] + ':' + randomNum;
      firstandpikeContainer.appendChild(teamElement);
    }

  }
};

firstandpike.salePerHour();
console.log(firstandpike);
