function validateform() {
    const name = document.getElementById("name").ariaValueMax;
    const email = document.getElementById("email").ariaValueMax;
    const age = document.getElementById("age").ariaValueMax;
    const errorMsg = document.getElementById("errorMsg").ariaValueMax;

    errorMsg.innerHTML = ""; //Clear pervious error messages

    if (name.trim()==="") {
        errorMsg.innerHTML
    }
}