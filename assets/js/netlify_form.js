const handleSubmit = (event) => {
  event.preventDefault();

  const myForm = event.target;
  const formData = new FormData(myForm);

  fetch("/", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams(formData).toString(),
  })
    .then(() => alert("Thank you for your submission"))
    .catch((error) => alert(error));
};

document.querySelector("form").addEventListener("submit", handleSubmit);

const form = document.querySelector(".php-email-form");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const sentMessage = form.querySelector(".sent-message");
  const errorMessage = form.querySelector(".error-message");
  const loading = form.querySelector(".loading");

  loading.style.display = "block";

  try {
    const response = await fetch("/", {
      method: "POST",
      body: new FormData(form),
      headers: { Accept: "application/json" },
    });

    if (response.ok) {
      sentMessage.style.display = "block";
      form.reset();
    } else {
      throw new Error("Submission failed");
    }
  } catch (error) {
    errorMessage.textContent = "An error occurred. Please try again.";
    errorMessage.style.display = "block";
  } finally {
    loading.style.display = "none";
  }
});
