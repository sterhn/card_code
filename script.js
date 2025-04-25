const correctPin = "1234";
let attempts = 3;

document.getElementById('submitBtn').addEventListener('click', () => {
    const pin = document.getElementById('pinInput').value;
    const message = document.getElementById('message');

    if (pin === correctPin) {
        message.textContent = "✅ CORRECT. PAYMENT COMPLETE!";
        message.style.color = "green";
    } else {
        attempts--;
        if (attempts > 0) {
            message.textContent = `❌ INCORRECT. ${attempts}/3 попыток осталось`;
            message.style.color = "red";
        } else {
            message.textContent = "🚫 Карта заблокирована.";
            message.style.color = "darkred";
            document.getElementById('submitBtn').disabled = true;
        }
    }
});
