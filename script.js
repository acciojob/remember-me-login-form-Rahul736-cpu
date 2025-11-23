window.onload = function () {
    const existingBtn = document.getElementById("existing");
    const savedUser = localStorage.getItem("username");
    const savedPass = localStorage.getItem("password");

    if (savedUser && savedPass) {
        existingBtn.style.display = "block";
    }

    existingBtn.addEventListener("click", () => {
        alert("Logged in as " + savedUser);
    });

    document.getElementById("loginForm").addEventListener("submit", function (event) {
        event.preventDefault();

        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;
        const remember = document.getElementById("checkbox").checked;

        alert("Logged in as " + username);

        if (remember) {
            localStorage.setItem("username", username);
            localStorage.setItem("password", password);
        } else {
            localStorage.removeItem("username");
            localStorage.removeItem("password");
        }

        if (localStorage.getItem("username")) {
            existingBtn.style.display = "block";
        } else {
            existingBtn.style.display = "none";
        }
    });
};
