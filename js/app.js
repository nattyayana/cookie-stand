

var firstandpike = {
  storeLocation: '1st & Pike',
  hoursofOpperation: '',
  minCust: 23,
  maxCust: 65,
  custAvgSale: 6.3,
  salePerHour: function(){
    var randomMinMax = ((Math.random() * (this.maxCust - this.minCust) + this.minCust))*this.custAvgSale;
    return Math.round(randomMinMax);

  }
};

firstandpike.salePerHour();
console.log(firstandpike.salePerHour());










// Stores the min/max hourly customers, and the average cookies per customer, in object properties

// Uses a method of that object to generate a random number of customers per hour. Objects/Math/random

// Calculate and store the simulated amounts of cookies purchased for each hour at each location using average cookies purchased and the random number of customers generated

// Store the results for each location in a separate array... perhaps as a property of the object representing that location
// Display the values of each array as unordered lists in the browser









// nfl.champions.push('Nobody Cares');
// nfl.showChampions(); 