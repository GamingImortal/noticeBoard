document.getElementById("myForm").addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent the default form submission

  // Get form values
  const regNum = document.getElementById("RegNum").value;
  const pin = document.getElementById("pin").value;

  // Simple validation (you can expand this as needed)
  if (regNum === "" || pin === "") {
    alert("Please fill in all fields.");
    return; // Stop form submission
  }

  // If all validations pass
  alert("Logging you in...");

  // Here you can add code to send the data to a server if needed.
});
// script.js

document.getElementById("myForm").addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent the default form submission

  // Get form values
  const studentName = document.getElementById("StudentName").value;
  const regNum = document.getElementById("RegNum").value;
  const pin = document.getElementById("Pin").value;
  const pinVerification = document.getElementById("PinVerification").value;

  // Validate PINs match
  if (pin !== pinVerification) {
    alert("Pins do not match!");
    return; // Stop form submission
  }

  // If all validations pass
  alert(
    "Your info is being verified. We will send you an email if successful."
  );

  // Here you can add code to send the data to a server if needed.
});
