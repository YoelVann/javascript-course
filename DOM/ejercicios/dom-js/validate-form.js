export default function validateForm() {
    const $name = document.querySelector(".input-name"),
        $email = document.querySelector(".input-email"),
        $comment = document.querySelector(".input-comment"),

        $invalidNameMessage = $name.nextElementSibling,
        $invalidEmailMessage = $email.nextElementSibling,
        $invalidCommentMessage = $comment.nextElementSibling,

        nameRegExp = /^[a-z ,.'-]+$/i,
        emailRegExp = /[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})/i,
        commentRegExp = /^.{1,200}/i,

        $submitBtn = document.getElementById("send-btn"),
        createInvalidBox = (inputSelector) => inputSelector.classList.add("invalid-value-active"),
        deleteInvalidBox = (inputSelector) => inputSelector.classList.remove("invalid-value-active"),

        validateInput = (selector, inputText, regExp, invalidMessage) => {
            if (inputText.match(regExp)) {
                selector.classList.add("valid-box");
                selector.classList.remove("invalid-box");
                deleteInvalidBox(invalidMessage);
            } else {
                selector.classList.add("invalid-box");
                selector.classList.remove("valid-box");
                createInvalidBox(invalidMessage);
            }
        };
    document.addEventListener("keyup", e => {
        if (e.target.matches(".input-name")) validateInput($name, e.target.value, nameRegExp, $invalidNameMessage);
        if (e.target.matches(".input-email")) validateInput($email, e.target.value, emailRegExp, $invalidEmailMessage);
        if (e.target.matches(".input-comment")) validateInput($comment, e.target.value, commentRegExp, $invalidCommentMessage);
    });

    document.addEventListener("submit", e => {
        e.preventDefault();
        if (e.target.matches("submit-btn")) {
        }
    });
}