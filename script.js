document.addEventListener("DOMContentLoaded", () => {
    const submitBtn = document.getElementById("submit-comment");
    const inputField = document.getElementById("comments");
    const commentDisplay = document.getElementById("comment-display");

    submitBtn.addEventListener("click", () => {
        const comment = inputField.value.trim();

        if (comment === "") {
            alert("Please enter a comment before submitting.");
            return;
        }

        const commentElement = document.createElement("p");
        commentElement.textContent = comment;
        commentElement.classList.add("comment-message");

        commentDisplay.appendChild(commentElement);
        inputField.value = ""; // Clear input field after submission
    });
});
