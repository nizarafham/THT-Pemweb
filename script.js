document.addEventListener("DOMContentLoaded", function() {
    const submitButton = document.getElementById("submitBtn");

    submitButton.addEventListener("click", function(event) {
        event.preventDefault(); 

        const emailInput = document.getElementById("email");
        const phoneInput = document.getElementById("phone");
        const projectInput = document.getElementById("project");

        const email = emailInput ? emailInput.value.trim() : "";
        const phone = phoneInput ? phoneInput.value.trim() : "";
        const project = projectInput ? projectInput.value.trim() : "";

        if (email && phone && project) {
            alert("Berhasil dikirim");
        } else {
            alert("Harap mengisi semua data terlebih dahulu");
        }
    });
});
