const correctPin = "355";
let attempts = 3;

document.getElementById('submitBtn').addEventListener('click', () => {
    const pin = document.getElementById('pinInput').value;
    const message = document.getElementById('message');

    if (pin === correctPin) {
        message.textContent = "✅ ВЕРНО. Оплата успешна";
        message.style.color = "green";
    } else {
        attempts--;
        if (attempts > 0) {
            message.textContent = `❌ НЕВЕРНО. ${attempts}/3 попыток осталось`;
            message.style.color = "red";
        } else {
            message.textContent = "🚫 Карта заблокирована на 10 минут.";
            message.style.color = "darkred";
            document.getElementById('submitBtn').disabled = true;
        }
    }
});
