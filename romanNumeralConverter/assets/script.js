document.addEventListener('DOMContentLoaded', () => {
    const elements = {
        input: document.getElementById('number'),
        button: document.getElementById('convert-btn'),
        output: document.getElementById('output'),
    };

    const ROMAN_MAP = [
        { value: 1000, numeral: "M" },
        { value: 900, numeral: "CM" },
        { value: 500, numeral: "D" },
        { value: 400, numeral: "CD" },
        { value: 100, numeral: "C" },
        { value: 90, numeral: "XC" },
        { value: 50, numeral: "L" },
        { value: 40, numeral: "XL" },
        { value: 10, numeral: "X" },
        { value: 9, numeral: "IX" },
        { value: 5, numeral: "V" },
        { value: 4, numeral: "IV" },
        { value: 1, numeral: "I" }
    ];

    /**
     * Converts a given integer to its Roman numeral representation.
     * @param {number} num The integer to convert.
     * @returns {string} The Roman numeral as a string.
     */
    const convertToRoman = (num) => {
        let roman = '';
        for (const { value, numeral } of ROMAN_MAP) {
            while (num >= value) {
                roman += numeral;
                num -= value;
            }
        }
        return roman;
    };

    /**
     * Validates user input and returns an error message if invalid.
     * @param {string} value The string value from the input field.
     * @returns {string|null} An error message or null if the input is valid.
     */
    const validateInput = (value) => {
        if (value.trim() === '') {
            return 'Please enter a number.';
        }
        const num = Number(value);
        if (isNaN(num)) {
            return 'Please enter a valid number.';
        }
        if (num < 1) {
            return 'Please enter a number greater than or equal to 1.';
        }
        if (num >= 4000) {
            return 'Please enter a number less than or equal to 3999.';
        }
        return null; // Return null for a valid input
    };

    /**
     * Handles the user's request to convert a number.
     * This function serves as the primary event handler.
     */
    const handleConversion = () => {
        const value = elements.input.value;
        const errorMessage = validateInput(value);

        if (errorMessage) {
            elements.output.textContent = errorMessage;
            return;
        }

        const num = parseInt(value, 10);
        elements.output.textContent = convertToRoman(num);
    };

    // Attach the event listener to the button.
    elements.button.addEventListener('click', handleConversion);
});