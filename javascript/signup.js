function validateFirstStep() {
    var name = document.getElementById('name').value.trim();
    var email = document.getElementById('email').value.trim();
    var age = document.getElementById('age').value.trim();
    var contact = document.getElementById('contact').value.trim();
    var password = document.getElementById('password').value.trim();

    if (name === '') {
        alert('Please fill in the required field "Name"');
        return;
    } else if (email === '') {
        alert('Please fill in the required field "Email"');
        return;
    } else if (age === '') {
        alert('Please fill in the required field "Age"');
        return;
    } else if (contact === '') {
        alert('Please fill in the required field "Contact"');
        return;
    } else if (password === '') {
        alert('Please fill in the required field "Password"');
        return;
    }

    document.querySelector(".tab").style.display = "none";
    document.querySelectorAll(".tab")[1].style.display = "block";
    document.querySelector(".step").style.backgroundColor = "#ddd";
    document.querySelectorAll(".step")[1].style.backgroundColor = "#4CAF50";
}

function prevStep() {
    document.querySelectorAll(".tab")[1].style.display = "none";
    document.querySelector(".tab").style.display = "block";
    document.querySelectorAll(".step")[1].style.backgroundColor = "#ddd";
    document.querySelector(".step").style.backgroundColor = "#4CAF50";
}

function submitForm() {
    var educationalPreference = document.getElementById("educational_preference").value.trim();
    var userPreference1 = document.getElementById("user_preference1").value.trim();
    var userPreference2 = document.getElementById("user_preference2").value.trim();
    
    if (educationalPreference === "" || userPreference1 === "" || userPreference2 === "") {
        alert("Please fill in all required fields.");
        return;
    }

    // Form submission logic here
    document.getElementById("myForm").submit();
}

// Set default state when page loads
window.onload = function() {
    document.querySelectorAll(".tab")[0].style.display = "block";
    document.querySelector(".step").style.backgroundColor = "#4CAF50";
};