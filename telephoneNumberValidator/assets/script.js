document.addEventListener('DOMContentLoaded', () => {
    const elements = {
        input: document.getElementById('user-input'),
        button: document.getElementById('check-btn'),
        clearButton: document.getElementById('clear-btn'),
        output: document.getElementById('results-div'),
    };

    // Valid US phone number regex. Use a named constant for clarity.
    const VALID_US_PHONE_REGEX = /^(1\s?)?(\(\d{3}\)|\d{3})[\s.-]?\d{3}[\s.-]?\d{4}$/;

    const handleValidation = () => {
        const inputValue = elements.input.value.trim();

        if (!inputValue) {
            alert('Please provide a phone number');
            return;
        }

        if (VALID_US_PHONE_REGEX.test(inputValue)) {
            displayFeedback(`Valid US number: ${inputValue}`, 'success');
        } else {
            displayFeedback(`Invalid US number: ${inputValue}`, 'error');
        }
    };

    const handleClear = () => {
        elements.input.value = '';
        elements.output.textContent = '';
        elements.output.className = ''; // Reset class to remove color
    };

    const displayFeedback = (message, type) => {
        elements.output.textContent = message;
        elements.output.className = type;
    };

    // Attach event listeners to the buttons.
    elements.button.addEventListener('click', handleValidation);
    // Add an event listener for the clear button.
    elements.clearButton.addEventListener('click', handleClear);
});