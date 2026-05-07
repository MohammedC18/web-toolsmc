function showMessage(): void {
    const message = document.getElementById("msg");

    if (message) {
        message.innerHTML = "Welcome to TypeScript Website!";
    }
}