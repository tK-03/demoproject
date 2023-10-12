document.getElementById("contactForm").addEventListener("submit", function(event) {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;

    if (!name || !email) {
        alert("名前とメールアドレスを入力してください。");
        event.preventDefault();
    }
});
