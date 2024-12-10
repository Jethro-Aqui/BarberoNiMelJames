document.getElementById('form').addEventListener('submit', function (event) {
    event.preventDefault();

    // Collect form values
    const firstName = document.getElementById('firstname').value.trim();
    const lastName = document.getElementById('lastname').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const appointmentDate = document.getElementById('appointmentdate').value.trim();
    const appointmentTime = document.getElementById('appointmenttime').value.trim();
    const barber = document.getElementById('barber').value;
    const service = document.getElementById('service').value;

    // Validate form fields
    if (!firstName || !lastName || !email || !phone || !appointmentDate || !appointmentTime || !barber || !service) {
        document.getElementById('error').textContent = 'All fields are required!';
        return;
    }

    // Clear error message
    document.getElementById('error').textContent = '';

    // Confirmation message
    alert(`
        Appointment Details:
        Name: ${firstName} ${lastName}
        Email: ${email}
        Phone: ${phone}
        Date: ${appointmentDate}
        Time: ${appointmentTime}
        Barber: ${barber}
        Service: ${service}
    `);

    // Optionally, submit form data to the server
    // form.submit();
});
