function Ticket(movieName, movieTime, personAge) {
  this.movieName = movieName;
  this.movieTime = movieTime;
  this.personAge = personAge;
}

Ticket.prototype.price = function() {
  var moviePrice = {};
  moviePrice["new"] = 5;
  moviePrice["old"] = 2;

  var timePrice = {};
  timePrice["matinee"] = 1;
  timePrice["evening"] = 3;

  var agePrice = {};
  agePrice["senior"] = 0;
  agePrice["child"] = 0;
  agePrice["adult"] = 3;

  var total = moviePrice[this.movieName] + timePrice[this.movieTime] + agePrice[this.personAge];
  return total;
}
