// ==========================================
// 1. PRODUCTION-READY ALGORITHM (Sanitized)
// ==========================================
/**
 * Caseless and punctuation-insensitive string ending confirmation.
 */
function confirmEndingSanitized(string, checkString) {
    // 1. Clean input data: lowercasing and removing punctuation marks (like dots)
    const cleanString = string.toLowerCase().replace(/\./g, "");
    const cleanCheck = checkString.toLowerCase().replace(/\./g, "");

    // 2. Perform literal slice matching
    return cleanString.slice(-cleanCheck.length) === cleanCheck;
}

// ==========================================
// 2. SANDBOX TESTING ENVIRONMENT
// ==========================================
const userString = "Developing software from a specification."; // Input with a period
const searchNode = "Specification"; // Capitalized input

// ==========================================
// 3. EXECUTION LOGS
// ==========================================
console.log(confirmEndingSanitized(userString, searchNode)); // Outputs: true (Cleaned & Matched!)