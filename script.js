(function() {
    const CORRECT_PIN = "1234";
    let attempts = 3;

    const input = document.getElementById("pinInput");
    const btn = document.getElementById("submitBtn");
    const msg = document.getElementById("message");

    btn.addEventListener("click", () => {
        if (input.value === CORRECT_PIN) {
            msg.textContent = "ВЕРНО. ОПЛАТА ЗАВЕРШЕНА";
            msg.style.color = "green";
            btn.disabled = true;
            input.disabled = true;
        } else {
            attempts--;
            if (attempts > 0) {
                msg.textContent = `НЕВЕРНО – ${3 - attempts + 1}/3 попыток осталось`;
                msg.style.color = "red";
            } else {
                msg.textContent = "НЕВЕРНО - карта заблокирована на 10 минут";
                msg.style.color = "red";
                btn.disabled = true;
                input.disabled = true;
            }
        }
        input.value = "";
        input.focus();
    });
})();
