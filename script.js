(function() {
    const CORRECT_PIN = "1234";
    let attempts = 3;

    const input = document.getElementById("pinInput");
    const btn = document.getElementById("submitBtn");
    const msg = document.getElementById("message");

    btn.addEventListener("click", () => {
        if (input.value === CORRECT_PIN) {
            msg.textContent = "CORRECT. PAYMENT COMPLETE";
            msg.style.color = "green";
            btn.disabled = true;
            input.disabled = true;
        } else {
            attempts--;
            if (attempts > 0) {
                msg.textContent = `INCORRECT – ${3 - attempts + 1}/3 attempts used`;
                msg.style.color = "red";
            } else {
                msg.textContent = "INCORRECT – No attempts left";
                msg.style.color = "red";
                btn.disabled = true;
                input.disabled = true;
            }
        }
        input.value = "";
        input.focus();
    });
})();
