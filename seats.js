
  // get all seats
  const seats = document.querySelectorAll('.seat');

  // initialize selected seats array and ticket price
  let selectedSeats = [];
  let ticketPrice = 0;

  // loop through seats and add click event listener
  seats.forEach((seat) => {
    seat.addEventListener('click', () => {
      // toggle seat selection
      seat.classList.toggle('selected');
      
      // add or remove seat from selected seats array
      const seatIndex = selectedSeats.indexOf(seat);
      if (seatIndex > -1) {
        selectedSeats.splice(seatIndex, 1);
      } else {
        selectedSeats.push(seat);
      }

      // recalculate ticket price based on number of selected seats
      ticketPrice = selectedSeats.length * 10;
      document.getElementById('total-price').innerText = `$${ticketPrice}`;
    });
  });
