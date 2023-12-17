document.getElementById("contact-form").addEventListener("submit", function (e) {
    e.preventDefault();
    document.getElementById("contact-form").style.display = "none";
    document.getElementById("thank-you").style.display = "block";
});
