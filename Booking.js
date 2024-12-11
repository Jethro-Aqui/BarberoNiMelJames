let selectedBarber = null;
let selectedTimeSlot = null;

// Function to handle barber and slot selection
function selectSlot(barberName, timeSlot) {
  selectedBarber = barberName;
  selectedTimeSlot = timeSlot;
  alert(`You selected ${barberName} at ${timeSlot}.`);
  event.preventDefault(); // Prevent any default action
}

// Function to submit the booking
function submitBooking() {
  // Retrieve form data
  const firstName = document.getElementById("customer-firstname").value;
  const lastName = document.getElementById("customer-lastname").value;
  const email = document.getElementById("customer-email").value;
  const phoneNum = document.getElementById("customer-phone").value;
  const service = document.getElementById("service").value;
  const appointmentDate = document.getElementById("appointmentDate").value;

  // Validate the form data
  const errorElement = document.getElementById("error");
  errorElement.textContent = ""; // Clear previous errors

  if (!firstName || !lastName || !email || !phoneNum || !service || !appointmentDate) {
    errorElement.textContent = "Please fill out all required fields.";
    return;
  }

  if (!selectedBarber || !selectedTimeSlot) {
    errorElement.textContent = "Please select a barber and time slot.";
    return;
  }

  // Update confirmation message
  const confirmationMessage = document.getElementById("confirmation-message");
  confirmationMessage.innerHTML = `
    <p><strong>Booking Confirmed!</strong></p>
    <p><strong>Name:</strong> ${firstName} ${lastName}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Phone Number:</strong> ${phoneNum}</p>
    <p><strong>Service:</strong> ${service}</p>
    <p><strong>Barber:</strong> ${selectedBarber}</p>
    <p><strong>Date:</strong> ${appointmentDate}</p>
    <p><strong>Time:</strong> ${selectedTimeSlot}</p>
  `;

  // Show the confirmation popup
  const popup = document.getElementById("booking-popup");
  popup.style.display = "block";
}

// Function to close the confirmation popup
function closePopup() {
  const popup = document.getElementById("booking-popup");
  popup.style.display = "none";
}
