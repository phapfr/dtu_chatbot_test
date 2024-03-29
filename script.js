const navbar = document.getElementById("navbar");
const sidebar = document.getElementById("sidebar");

navbar.onclick = () => {
    sidebar.classList.add("active");
};