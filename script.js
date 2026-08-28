document.getElementById("btn21").addEventListener("click", function(event) {
    event.preventDefault();

    let name = document.getElementById("inpu1").value;
    let email = document.getElementById("inpu2").value;
    let message = document.getElementById("personal").value;

    if (name === "" || email === "" || message === "") {
        alert("Please fill in all fields!");
        return;
    }

    document.getElementById("inpu1").value = "";
    document.getElementById("inpu2").value = "";
    document.getElementById("personal").value = "";

    alert("Your message has been sent! We will contact you soon.");
});
