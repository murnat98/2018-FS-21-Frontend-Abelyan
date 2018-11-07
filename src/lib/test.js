export default function say(name) {
    const app = document.getElementById("app");
    app.innerHTML = name;
    app.style.background = "red";
}