const userNameInput = document.getElementById("userNameInput")
const passwordInput = document.getElementById("passwordInput")
const signInBtn = document.getElementById("signInBtn")

signInBtn.addEventListener("click", (event) => {
    event.preventDefault()
    // console.log(event)
    // console.log(userNameInput.value.trim())
    // console.log(passwordInput.value.trim())

    if (userNameInput.value === "admin" && passwordInput.value === "admin123") {
        // console.log("ok")

        window.location.href = 'index.html';

    } else {
        userNameInput.value = " "
        passwordInput.value = " "
    }
})

