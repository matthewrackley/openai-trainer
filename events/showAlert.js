

module.exports = function (message) {
    const modal = document.getElementById("modal");
    const data = document.getElementById("data");

    if (data) {
        data.textContent = message;
        modal.style.display = "block";
    }
};
