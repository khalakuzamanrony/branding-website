const form = document.querySelector('.php-email-form');

form.addEventListener('submit', async (e) => {
  e.preventDefault();

  const sentMessage = form.querySelector('.sent-message');
  const errorMessage = form.querySelector('.error-message');
  const loading = form.querySelector('.loading');

  console.log('Form submission started'); // Debug log

  // Show the loading spinner
  loading.style.display = 'block';
  // Hide any previous messages
  sentMessage.style.display = 'none';
  errorMessage.style.display = 'none';

  try {
    // Submit the form to Netlify
    const response = await fetch('/', {
      method: 'POST',
      body: new FormData(form),
      headers: { 'Accept': 'application/json' }
    });

    console.log('Form submitted, response:', response); // Debug log

    if (response.ok) {
      // Show the success message
      sentMessage.style.display = 'block';
      // Reset the form
      form.reset();
      console.log('Form submission successful'); // Debug log
    } else {
      // Throw an error if the response is not OK
      throw new Error('Submission failed');
    }
  } catch (error) {
    // Show the error message
    errorMessage.textContent = 'An error occurred. Please try again.';
    errorMessage.style.display = 'block';
    console.error('Form submission error:', error); // Debug log
  } finally {
    // Hide the loading spinner
    loading.style.display = 'none';
    console.log('Loading spinner hidden'); // Debug log
  }
});