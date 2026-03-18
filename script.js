// Contact form validation
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();
  const formMessage = document.getElementById("formMessage");

  if (!name || !email || !message) {
    formMessage.textContent = "Please fill in all fields.";
    formMessage.style.color = "red";
    return;
  }

  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!email.match(emailPattern)) {
    formMessage.textContent = "Please enter a valid email.";
    formMessage.style.color = "red";
    return;
  }

  formMessage.textContent = "Message sent successfully!";
  formMessage.style.color = "green";
  document.getElementById("contactForm").reset();
});

document
  .getElementById("contactForm")
  .addEventListener("submit", async function (e) {
    e.preventDefault(); // stop redirect

    const form = e.target;
    const formMessage = document.getElementById("formMessage");

    // Show "sending..." feedback
    formMessage.textContent = "Sending...";
    formMessage.style.color = "blue";

    try {
      const response = await fetch(form.action, {
        method: form.method,
        body: new FormData(form),
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        formMessage.textContent = "Message sent successfully!";
        formMessage.style.color = "green";
        form.reset();
      } else {
        formMessage.textContent = "Oops! Something went wrong.";
        formMessage.style.color = "red";
      }
    } catch (error) {
      formMessage.textContent = "Error sending message.";
      formMessage.style.color = "red";
    }
  });
