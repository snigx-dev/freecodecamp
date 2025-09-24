document.addEventListener('DOMContentLoaded', function(){
  const dom = {
    input: document.getElementById('text-input'),
    button: document.getElementById('check-btn'),
    result: document.getElementById('result'),
  };

  /**
   * Cleans and checks if a string is a palindrome.
   * @param {string} str The string to check.
   * @returns {boolean} True if the string is a palindrome, false otherwise.
   */
  const isPalindrome = (str) => {
    const _cleanString = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    for (let i = 0, j = _cleanString.length - 1; i < j; i++, j--) {
      if (_cleanString[i] !== _cleanString[j]) {
        return false;
      }
    }
    return true;
  };

  /**
   * Handles the button click event.
   */
  const handleCheck = () => {
    const text = dom.input.value.trim(); // Trim whitespace for cleaner input.
    if (!text) {
      alert('Please input a value.');
      return;
    }
    const message = isPalindrome(text) ?
      `${text} is a palindrome.` :
      `${text} is not a palindrome.`;

    dom.result.textContent = message;
  };

  // Add the event listener to the button.
  dom.button.addEventListener('click', handleCheck);
});
