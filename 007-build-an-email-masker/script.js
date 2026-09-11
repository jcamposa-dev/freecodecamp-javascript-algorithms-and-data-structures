let email = "apple.pie@example.com";
function maskEmail(email) {
    let arrobaPosition = email.indexOf("@");
    if (arrobaPosition <= 2) return email;
    let hiddenSimbol = "*".repeat(arrobaPosition - 2);
    return email.slice(0, 1) + hiddenSimbol + email.slice(arrobaPosition - 1);
}

console.log(maskEmail(email));
