// Quando o botão de menu for clicado, alterna a visibilidade do menu
const menuToggle = document.getElementById("menu-toggle");
const menu = document.getElementById("menu");

menuToggle.addEventListener("click", function() {
    menu.classList.toggle("active");
});

// Fecha o menu quando um item é clicado em telas pequenas
const menuItems = document.querySelectorAll(".menu-item");

menuItems.forEach(item => {
    item.addEventListener("click", () => {
        // Fecha o menu quando um item é clicado em telas pequenas
        if (window.innerWidth <= 768) {
            menu.classList.remove("active");
        }
    });
});

// Para garantir que o menu esteja fechado ao carregar a página em dispositivos pequenos
window.addEventListener("resize", () => {
    if (window.innerWidth > 768) {
        menu.classList.remove("active");
    }
});
