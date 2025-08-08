document.addEventListener("DOMContentLoaded", function () {
    const input = document.getElementById("comments");
    const display = document.getElementById("comment-display");
    const button = document.getElementById("submit-comment");

    button.addEventListener("click", function () {
        const comment = input.value.trim();

        if (comment.length < 3) {
            display.textContent = "Please write a bit more — at least 3 characters.";
            display.style.color = "orange";
        } else {
            display.textContent = `"${comment}" — nice thought!`;
            display.style.color = "#00ffd0";
            input.value = "";
        }
    });
});
