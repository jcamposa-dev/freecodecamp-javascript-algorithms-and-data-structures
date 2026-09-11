let email = "apple.pie@example.com";
function maskEmail(email) {
    let arrobaPosition = email.indexOf("@");
    let hiddenPart = email.slice(1, (arrobaPosition - 1, arrobaPosition));
    let hiddenSimbol = "*".repeat(arrobaPosition - 2);
    return email.slice(0, 1) + hiddenSimbol + email.slice(arrobaPosition - 1);
}

console.log(maskEmail(email));
