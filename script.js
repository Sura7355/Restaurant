document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;
    alert(`Reservation for ${name} on ${date} at ${time} has been made!`);
});
