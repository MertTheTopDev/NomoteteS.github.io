function sendMail(e) {
    e.preventDefault(); // Formun yenilenmesini engeller

    let params = {
        fullname : document.getElementById("fullname").value,
        email : document.getElementById("email").value,
        message : document.getElementById("message").value
    };

    emailjs.send("service_zaxjxdw", "template_31gq4rx", params)
    .then(() => {
        alert("Email Sent ✔️");
        document.getElementById("fullname").value = "";
        document.getElementById("email").value = "";
        document.getElementById("message").value = "";
    })
    .catch((error) => {
        alert("Error! ❌ " + JSON.stringify(error));
    });
}
