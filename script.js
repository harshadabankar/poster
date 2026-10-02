// MOBILE MENU

function toggleMenu() {

    const nav = document.getElementById("navMenu");

    nav.classList.toggle("active");

}


// CLOSE MOBILE MENU AFTER CLICKING

document.querySelectorAll("#navMenu a").forEach(link => {

    link.addEventListener("click", () => {

        document
            .getElementById("navMenu")
            .classList.remove("active");

    });

});


// INTERACTIVE ACTION CARDS

function showMessage(action) {

    const message = document.getElementById("message");

    const messages = {

        Learn:
            "📚 Great choice! Keep learning and use your knowledge to create positive change.",

        Create:
            "💡 Great choice! Your ideas and creativity can help solve tomorrow's problems.",

        Serve:
            "🤝 Great choice! Small acts of service can create meaningful change.",

        Protect:
            "🌱 Great choice! Protecting nature means protecting our future."

    };

    message.innerHTML = messages[action];

}
