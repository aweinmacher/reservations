var reservations = {
  'Bob': { claimed: false },
  'Ted': { claimed: true }
}

var name = prompt('Please enter the name for your reservation');

var claimReservation = function () {
  name = name.toLowerCase();
  name = name.charAt(0).toUpperCase() + name.slice(1);
  for (key in reservations) {
    if (key === name && reservations[name].claimed === false) {
      alert("Welcome, " + name + "!");
      return;
    }
    if (key === name && reservations[name].claimed === true) {
      alert("Your reservations has already been claimed, " + name + "!");
      return;
    }
  }
  reservations[name] = { claimed: true };
  alert("There's nothing under your name, " + name + ", but we have made it for you!");
  console.log(reservations);
  return;
}

claimReservation();