function Ticket(movieName, movieTime, personAge) {
  this.movieName = movieName;
  this.movieTime = movieTime;
  this.personAge = personAge;
  this.ticketPrice = [];
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

function resetFields() {
    $("select.movie-title").val("");
    $("select.show-time").val("");
    $("select.age-price").val("");

}

$(document).ready(function() {
  $("form#movieSelect").submit(function() {
    event.preventDefault();

    var selectedMovie = $(this).find("select.movie-title").val();
    var selectedTime = $(this).find("select.show-time").val();
    var selectedAge = $(this).find("select.age-price").val();
    var newTicket = new Ticket(selectedMovie, selectedTime, selectedAge)

    $("#movieSelect").submit(function(){
      $(".movie-name").text(newTicket.movieName);
      $(".movie-showtime").text(newTicket.movieTime);
      $(".ticket-price").text(newTicket.price());

        newTicket.push(newAddress)
    });





    resetFields();
  });
});
