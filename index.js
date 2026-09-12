const ratingButtons = document.querySelectorAll('.rating-btn');
const submitButton = document.getElementById('submit-btn');
const ratingState = document.querySelector('.rating-state');
const thankYouState = document.querySelector('.thank-you-state');
const selectionText = document.getElementById('selection-text');

let selectedRating = 0;

ratingButtons.forEach((button) => {
  button.addEventListener('click', () => {
    selectedRating = Number(button.textContent.trim());

    ratingButtons.forEach((btn) => {
      btn.classList.toggle('active', btn === button);
    });

    submitButton.disabled = false;
  });
});

submitButton.addEventListener('click', () => {
  if (!selectedRating) {
    return;
  }

  selectionText.textContent = `You selected ${selectedRating} out of 5`;
  ratingState.classList.add('hidden');
  thankYouState.classList.remove('hidden');
});