const form = document.getElementById('myForm');

// Prevent form from submitting
form.addEventListener("submit", function(event) {
    event.preventDefault();

    // Retrieve the input field value
    const inputField = document.getElementById('inputField'); 
    const inputValue = inputField.value;

    // Regular expression pattern for alphanumeric input
    const regex = /^[a-zA-Z0-9]*$/;

    // Check if the input value matches the pattern
    if (regex.test(inputValue)) {
        // Valid input: display confirmation and submit the form
        alert("Input is valid!");
        // Simulate form submission (adjust as needed since the server won't process)
    } else {
        // Invalid input: display error message
        alert("Error: Input must be alphanumeric!");
    }
});
