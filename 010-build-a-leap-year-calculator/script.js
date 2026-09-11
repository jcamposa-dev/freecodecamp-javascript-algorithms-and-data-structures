// ==========================================
// 1. ALGORITHM DEFINITION (Pure Logic)
// ==========================================
/**
 *  Determines if a year is a leap year.
 *  @param {number} year - The year to be evaluated.
 *  @returns {string} Formatted result stating the leap year status.
 */
function isLeapYear(year) {
    // Condition: Divisible by 4 AND (NOT divisible by 100 OR divisible by 400)
    if (
        Number.isInteger(year / 4) &&
        (!Number.isInteger(year / 100) || Number.isInteger(year / 400))
    ) {
        return `${year} is a leap year.`;
    } else {
        return `${year} is not a leap year.`;
    }
}

// ==========================================
// 2. TESTING ENVIRONMENT (Sandbox Cases)
// ==========================================
const testYearLeapCentury = 2000; // Edge Case: Exceptional Leap Year (Century)
const testYearCommonCentury = 1900; // Edge Case: Exceptional Common Year (Century)
const testYearStandardLeap = 2024; // Standard Leap Year Case

// ==========================================
// 3. EXECUTION LOGS (Human Verification)
// ==========================================
console.log(isLeapYear(testYearLeapCentury)); // Outputs: "2000 is a leap year."
console.log(isLeapYear(testYearCommonCentury)); // Outputs: "1900 is not a leap year."
console.log(isLeapYear(testYearStandardLeap)); // Outputs: "2024 is a leap year."
