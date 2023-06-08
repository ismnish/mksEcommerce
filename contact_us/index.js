document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();
    // Process the form submission here, such as sending an email or saving the message to a database
    // You can access the form values using the document.getElementById() method and take appropriate actions
    // For demonstration purposes, let's just log the form values to the console
    console.log("Name:", document.getElementById("name").value);
    console.log("Email:", document.getElementById("email").value);
    console.log("Message:", document.getElementById("message").value);
  });
  