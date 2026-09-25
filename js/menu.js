// ===========================================
// MENÚ HAMBURGUESA - Esencia Tropical
// ===========================================

document.addEventListener('DOMContentLoaded', function () {

    const menuToggle = document.getElementById('menuToggle');
    const navMenu = document.getElementById('navMenu');

    if (!menuToggle || !navMenu) return;

    // Abrir/cerrar el menú al hacer clic en el ícono
    menuToggle.addEventListener('click', function () {
        navMenu.classList.toggle('activo');

        const expandido = navMenu.classList.contains('activo');
        menuToggle.setAttribute('aria-expanded', expandido);

        // Cambia el ícono de "hamburguesa" a "X" y viceversa
        menuToggle.innerHTML = expandido
            ? '<i class="fa-solid fa-xmark"></i>'
            : '<i class="fa-solid fa-bars"></i>';
    });

    // Cerrar el menú automáticamente al elegir un link (útil en móvil)
    navMenu.querySelectorAll('a').forEach(function (enlace) {
        enlace.addEventListener('click', function () {
            navMenu.classList.remove('activo');
            menuToggle.setAttribute('aria-expanded', 'false');
            menuToggle.innerHTML = '<i class="fa-solid fa-bars"></i>';
        });
    });

    // Cerrar el menú si la pantalla vuelve a tamaño de escritorio
    window.addEventListener('resize', function () {
        if (window.innerWidth > 992) {
            navMenu.classList.remove('activo');
            menuToggle.setAttribute('aria-expanded', 'false');
            menuToggle.innerHTML = '<i class="fa-solid fa-bars"></i>';
        }
    });

});
