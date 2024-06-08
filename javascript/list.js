function openPopup(message) {
    var popupMessageElement = document.getElementById("popupMessage");
    popupMessageElement.textContent = message;
    document.getElementById("overlay").style.display = "block";
}

function closePopup() {
    document.getElementById("overlay").style.display = "none";
}

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("subscribeForm").addEventListener("submit", function(event) {
        event.preventDefault();
        var firstName = document.getElementById("firstName").value.trim();
        var lastName = document.getElementById("lastName").value.trim();
        var email = document.getElementById("email").value.trim();

        if (firstName === '' || lastName === '' || email === '') {
            alert("Please fill in all the required fields.");
            return;
        }

        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert("Please enter a valid email address.");
            return;
        }

        console.log("Subscribing: " + firstName + " " + lastName + " (" + email + ")");
        openPopup("Dear " + firstName + ", you have successfully subscribed for a personalized newsletter.");
        document.getElementById("subscribeForm").reset();

        
    });
    

});



function changeColor(selectedColor) {
        document.body.style.backgroundColor = selectedColor;
    // Exclude footer from color change
    document.querySelector('footer').style.backgroundColor = 'white'; // Reset footer background color
}

// Add click event listener to the hamburger icon


function myFunction() {
    var x = document.getElementById("nav");
    if (x.className === "links") {
      x.className += " responsive";
    } else {
      x.className = "links";
    }
  }


  function changeFont(fontSelect) {
    document.querySelector('P').style.color = fontSelect;
}


//  review section 

  function fetchAndDisplayReviews() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var xmlDoc = this.responseXML;
            var reviews = xmlDoc.getElementsByTagName("review");
            var reviewsContainer = document.getElementById("reviews-container");
            for (var i = 0; i < reviews.length; i++) {
                var name = reviews[i].getElementsByTagName("name")[0].textContent;
                var date = reviews[i].getElementsByTagName("date")[0].textContent;
                var rating = reviews[i].getElementsByTagName("rating")[0].textContent;
                var comment = reviews[i].getElementsByTagName("comment")[0].textContent;
                var reviewElement = document.createElement("div");
                reviewElement.classList.add("review-box");
                reviewElement.innerHTML = "<div class='review-name'>" + name + "</div><div class='review-date'>Posted on: " + date + "</div><p><span class='review-rating'> " + rating + "</span></p><p class='review-comment'>" + comment + "</p>";
                reviewsContainer.appendChild(reviewElement);
            }
        }
    };
    xhttp.open("GET", "reviews.xml", true);
    xhttp.send();
}

fetchAndDisplayReviews();



    document.getElementById("subscribeForm").addEventListener("submit", function(event) {
        var firstName = document.getElementById("firstName").value.trim();
        var lastName = document.getElementById("lastName").value.trim();
        var email = document.getElementById("email").value.trim();
        var isValid = true;

        // Validate first name
        if (firstName === "") {
            isValid = false;
            alert("Please enter your first name.");
        }

        // Validate last name
        if (lastName === "") {
            isValid = false;
            alert("Please enter your last name.");
        }

        // Validate email
        if (email === "") {
            isValid = false;
            alert("Please enter your email address.");
        } else if (!isValidEmail(email)) {
            isValid = false;
            alert("Please enter a valid email address.");
        }

        if (!isValid) {
            event.preventDefault(); // Prevent form submission if validation fails
        }
    });

    // Function to validate email address format
    function isValidEmail(email) {
        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

