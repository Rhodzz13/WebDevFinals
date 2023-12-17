document.getElementById("contact-form").addEventListener("submit", function (e) {
    e.preventDefault();
    // Assuming you want to display a thank you message and hide the form
    document.getElementById("contact-form").style.display = "none";
    document.getElementById("thank-you").style.display = "block";
});
