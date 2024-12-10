// booking.js
document.getElementById("book-now-btn").addEventListener("click", function () {
    // Get values from the form
    const date = document.getElementById("appointment-date").value;
    const time = document.getElementById("appointment-time").value;

    // Validate inputs
    if (!date || !time) {
        alert("Please select both a date and a time for your appointment.");
        return;
    }

    // Display confirmation message
    document.getElementById("confirmation-message").style.display = "block";
});
