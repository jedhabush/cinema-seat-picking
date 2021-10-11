const container = document.querySelector('.container');
const seats = document.querySelectorAll('.row .seat:not(.occupied)');
const count = document.getElementById('count');
const total = document.getElementById('total');
const movieSelect = document.getElementById('movie');

let ticketPrice = +movieSelect.value; //Adding the + sign to change it from string to a number

//functions

//update total and count
const updateSelectedCount = function () {
  const selectedSeats = document.querySelectorAll('.row .seat.selected');
  const selectedSeatsCount = selectedSeats.length;
  console.log(selectedSeats);

  count.innerText = selectedSeatsCount;
  total.innerText = selectedSeatsCount * ticketPrice;
};

//Movie select drop event

movieSelect.addEventListener('change', function (e) {
  ticketPrice = +e.target.value;
  updateSelectedCount();
});

//Container seat click event listener
container.addEventListener('click', function (e) {
  // once you click if or not contains class seat but not occupied
  if (
    e.target.classList.contains('seat') &&
    !e.target.classList.contains('occupied')
  ) {
    e.target.classList.toggle('selected'); //  True, we add class CSS selected to turn it to bluel
  }
  //call the function when clicked event happen
  updateSelectedCount();
});
