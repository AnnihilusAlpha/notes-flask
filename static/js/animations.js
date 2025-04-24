document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");
    if (form) {
        form.addEventListener("submit", () => {
            setTimeout(() => {
                form.querySelector("textarea").value = "";
            }, 50);
        });
    }
});
