function selectOption(selectedButton) {
    const options = document.querySelectorAll('.option');
    options.forEach(option => {
        option.classList.remove('selected'); // Remove 'selected' class from all options
    });

    selectedButton.classList.add('selected'); // Add 'selected' class to the clicked option

    const resultDiv = document.getElementById('result');
    if (selectedButton.textContent.includes("Neural Networks to Predict Use")) {
        resultDiv.textContent = "Correct! Neural Networks are indeed the most energy-efficient way to manage temperature.";
    } else {
        resultDiv.textContent = "Incorrect. Try again!";
    }
}
