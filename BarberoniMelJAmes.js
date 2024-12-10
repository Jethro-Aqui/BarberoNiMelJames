// script.js
document.getElementById("bookingForm").addEventListener("submit", function (event) {
    event.preventDefault();
  
    // Get form values
    const name = document.getElementById("name").value;
    const barber = document.getElementById("barber").value;
    const service = document.getElementById("service").value;
    const time = document.getElementById("time").value;
  
    // Generate confirmation details
    const confirmationMessage = `
      Thank you, ${name}! Your appointment is booked with ${barber} 
      for a ${service} at ${time}.
    `;
  
    // Show confirmation
    document.getElementById("bookingForm").classList.add("hidden");
    const confirmationDiv = document.getElementById("confirmation");
    document.getElementById("details").textContent = confirmationMessage;
    confirmationDiv.classList.remove("hidden");
  });
  