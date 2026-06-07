// Find the button and the secret text in the HTML
const button = document.getElementById('magicButton');
const magicText = document.getElementById('magicText');

// Listen for when someone clicks the button
button.addEventListener('click', () => {
    // Toggle the classes to show or hide the text
    if (magicText.classList.contains('hidden')) {
        magicText.classList.remove('hidden');
        magicText.classList.add('visible');
        button.textContent = "Hide Magic";
    } else {
        magicText.classList.remove('visible');
        magicText.classList.add('hidden');
        button.textContent = "Click for Magic";
    }
});