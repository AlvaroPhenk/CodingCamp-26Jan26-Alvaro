// Welcome Text
const welcome = document.getElementById("welcomeText");
const userName = prompt("Enter your name:");
if (userName) {
    welcome.innerText = "Hi, " + userName;
}

// Form Validation
document.getElementById("messageForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    if (!name || !email || !message) {
        alert("All fields must be filled!");
        return;
    }

    document.getElementById("result").innerHTML = `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong> ${message}</p>
    `;

    this.reset();
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    }
);});