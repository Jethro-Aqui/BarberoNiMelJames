<script>
        // JavaScript for Booking Functionality
        document.getElementById("book-now-btn").addEventListener("click", function () {
            const date = document.getElementById("appointment-date").value;
            const time = document.getElementById("appointment-time").value;

            // Check if date and time are selected
            if (!date || !time) {
                alert("Please select both a date and a time for your appointment.");
                return;
            }

            // Display confirmation message
            document.getElementById("confirmation-message").style.display = "block";
        });
    </script>
</body>
</html>

// Barber availability data
const barberAvailability = {
    "John Doe": true, // Available
    "Mark Smith": false, // Unavailable
    "Jane Williams": true // Available
};

// Function to update availability status
function checkBarberAvailability(selectedBarber) {
    const bookNowBtn = document.getElementById("book-now-btn");
    const availabilityMessage = document.getElementById("availability-message");

    if (barberAvailability[selectedBarber] === false) {
        // Barber is unavailable
        availabilityMessage.textContent = `${selectedBarber} is unavailable at the moment. Please select another barber.`;
        availabilityMessage.style.color = "red";
        bookNowBtn.disabled = true; // Disable the "Book Now" button
    } else {
        // Barber is available
        availabilityMessage.textContent = `${selectedBarber} is available.`;
        availabilityMessage.style.color = "green";
        bookNowBtn.disabled = false; // Enable the "Book Now" button
    }
}

// Add event listener to barber items
document.querySelectorAll(".barber-item").forEach((item) => {
    item.addEventListener("click", function () {
        const selectedBarber = this.querySelector("h5").textContent; // Get barber's name
        checkBarberAvailability(selectedBarber); // Check availability
    });
});

<!-- Availability Message -->
<div id="availability-message" class="text-center mt-3"></div>

