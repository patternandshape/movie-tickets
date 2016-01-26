describe ("Ticket", function(){
  it("will take in user information to later determine price", function(){
    var testTicket = new Ticket("Star Wars","6:45","16");
    expect(testTicket.movieName).to.equal("Star Wars");
    expect(testTicket.movieTime).to.equal("6:45");
    expect(testTicket.personAge).to.equal("16");
  });
});

// describe ("movieOld", function(){
//   it("will ", function(){
//     var testTicket = new Ticket("Star Wars","6:45","16");
//     expect(testTicket.movieName).to.equal("Star Wars");
//     expect(testTicket.movieTime).to.equal("6:45");
//     expect(testTicket.personAge).to.equal("16");
//   });
// });
