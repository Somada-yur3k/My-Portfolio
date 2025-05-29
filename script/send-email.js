// Initialize form handling when the DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
  // Get the form element
  const form = document.getElementById('contactForm');
  
  // Clear form fields on page load
  if (form) {
    form.reset();
  }

  // Add form submit event listener
  form.addEventListener('submit', function(event) {
    event.preventDefault();
    sendMail(event);
  });
});

function sendMail(event) {
  // Get form values
  const FName = document.getElementById("first-name").value.trim();
  const LName = document.getElementById("last-name").value.trim();
  const email = document.getElementById("email").value.trim();
  const subject = document.getElementById("subject").value.trim();
  const message = document.getElementById("message").value.trim();

  // Only validate if the form was actually submitted
  if (event && event.type === 'submit') {
    // Validation
    if (!FName || !LName || !email || !subject || !message) {
      alert("Please fill in all fields.");
      return;
    }

    if (!email.includes("@")) {
      alert("Please enter a valid email address.");
      return;
    }

    if (subject.length < 5) {
      alert("Subject must be at least 5 characters long.");
      return;
    }

    // Prepare email parameters
    const parms = {
      name: `${FName} ${LName}`,
      email,
      subject,
      message,
    };

    // Send the email
    emailjs.send("service_h4fv7ct", "template_ddkxpy9", parms).then(
      function () {
        // Clear the form
        document.getElementById("contactForm").reset();

        // Show the success modal
        const modal = document.getElementById("successModal");
        if (modal) {
          modal.classList.remove("hidden");
          modal.classList.add("flex");

          // Add event listeners for modal close buttons
          document.querySelectorAll("[data-modal-toggle='successModal']").forEach((btn) => {
            btn.addEventListener("click", () => {
              modal.classList.add("hidden");
              modal.classList.remove("flex");
            });
          });
        }
      },
      function (error) {
        console.error("EmailJS error:", error);
        alert("Something went wrong. Please try again later.");
      }
    );
  }
}
