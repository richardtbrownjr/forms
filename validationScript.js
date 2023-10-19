    // JavaScript code for form validation

      // Prevent the form from submitting
      document.getElementById("myForm").addEventListener("submit", function (event) {
      // Retrieve the input field value
        const inputField = document.getElementById("inputField").value;

     // Regular expression pattern for alphanumeric input
        const alphanumericPattern = /^[a-zA-Z0-9]+$/;

    // Check if the input value matches the pattern
        if (!alphanumericPattern.test(inputField)) {
    // Invalid input: display error message
          alert("Invalid input. Please enter only alphanumeric characters (letters and numbers).");
          event.preventDefault(); // Prevent form submission
        } else {
    // Valid input: display confirmation
          alert("Input is valid. Form will be submitted.");
        }
      });
