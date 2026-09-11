// ==========================================
// 1. ALGORITHM DEFINITION (Pure Logic)
// ==========================================
/**
 * Applies truncation to a string if it exceeds a specified length limit.
 * @param {string} string - The input string to be truncated.
 * @param {number} number - The maximum character limit for the string.
 * @returns {string} The truncated string appended with "..." or the original string.
 */
function truncateString(string, number) {
    if (string.length > number) {
        return string.slice(0, number) + "...";
    } else {
        return string;
    }
}

// ==========================================
// 2. TESTING ENVIRONMENT (Sandbox Cases)
// ==========================================
const textStringCase1 = `Formatted result stating the leap year status.`;
const stringLimit1 = 50;
const textStringCase2 = `Formatted result.`;
const stringLimit2 = 15;
const textStringCase3 = `If the length of the string is equal to or lower than the given number, the string should be returned unchanged.`;
const stringLimit3 = 20;

// ==========================================
// 3. EXECUTION LOGS (Human Verification)
// ==========================================
console.log(truncateString(textStringCase1, stringLimit1)); // Outputs: 'Formatted result stating the leap year status.'
console.log(truncateString(textStringCase2, stringLimit2)); // Outputs: 'Formatted resul...'
console.log(truncateString(textStringCase3, stringLimit3)); // Outputs: 'If the length of the...'
