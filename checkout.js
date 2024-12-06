var totalPrice = localStorage.getItem('totalPrice');

// Display total price
document.getElementById('totalPrice').textContent = totalPrice;



function validate() {
    // Get all required input fields
    var requiredInputs = document.querySelectorAll('input[required]');
  
    // Keep track of validation 
    var isValid = true;
  
    // Map through input fields
    requiredInputs.forEach(function(input) {
      // Check if the input value is empty
      if (input.value.trim() === '') {
        isValid = false;
        
      } else {
        // If not empty, true
        isValid
      }
    });
  
    // If all required fields are filled display alert and redirect to shop
    if (isValid) {
        alert("Thank you for the purchase!")
        window.location.href = "shop.html";
    }
    else {
      // If not display alert
      alert('Please fill out all required fields.');
    }
}

function cancel(){
  window.location.href = "shop.html";
}