var reservations = {
  'Bob': { claimed: false },
  'Ted': { claimed: true }
}

var name = prompt('Please enter the name for your reservation');

var claimReservation = function () {
  name = name.toLowerCase();
  name = name.charAt(0).toUpperCase() + name.slice(1);
  if (!reservations.hasOwnProperty(name)) {
    reservations[name] = { claimed: true };
    alert("There's nothing under your name, " + name + ", but we have made it for you!");
    console.log(reservations);
  } else if (!reservations[name].claimed) {
    reservations[name] = true;
    alert("Welcome, " + name + "!");
  } else {
    alert("Your reservations has already been claimed, " + name + "!");
  }
}

claimReservation();