/*=========================================================
            PROYECTO MARACUYÁ NATURAL
                script.js
=========================================================*/

/*=========================================================
            CAMBIO DEL HEADER AL HACER SCROLL
=========================================================*/


window.addEventListener("scroll", function() {

    const header = document.querySelector("header");

    if (window.scrollY > 50) {

        header.classList.add("abajo");

    } else {

        header.classList.remove("abajo");

    }

});

/*=========================================================
            BOTÓN VOLVER ARRIBA
=========================================================*/

const botonArriba = document.createElement("button");

botonArriba.id = "btnTop";

botonArriba.innerHTML = "↑";

document.body.appendChild(botonArriba);

window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {

        botonArriba.style.display = "block";

    } else {

        botonArriba.style.display = "none";

    }

});

botonArriba.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});

/*=========================================================
        BOTÓN SUSCRIBIRSE
=========================================================*/

const botonSuscribirse = document.getElementById("btnSuscribirse");

if (botonSuscribirse) {

    botonSuscribirse.addEventListener("click", function() {

        const nombre = prompt("Ingrese su nombre:");

        if (nombre === null || nombre.trim() === "") {

            alert("Debe ingresar un nombre.");

            return;

        }

        const correo = prompt("Ingrese su correo electrónico:");

        if (correo === null || correo.trim() === "") {

            alert("Debe ingresar un correo.");

            return;

        }

        alert(

            "¡Gracias por suscribirte, " +

            nombre +

            "!\n\nMuy pronto recibirás noticias sobre nuestros productos."

        );

    });

}

/*=========================================================
        EFECTO EN LOS ENLACES DEL MENÚ
=========================================================*/

const enlaces = document.querySelectorAll("nav ul li a");

enlaces.forEach((enlace) => {

    enlace.addEventListener("click", function() {

        enlaces.forEach((item) => {

            item.classList.remove("activo");

        });

        this.classList.add("activo");

    });

});

/*=========================================================
        ANIMACIÓN DE APARICIÓN
=========================================================*/

const elementos = document.querySelectorAll(

    ".presentacion, .destacado, .beneficios, .circulos"

);

function mostrarElementos() {

    elementos.forEach((elemento) => {

        const posicion = elemento.getBoundingClientRect().top;

        const pantalla = window.innerHeight;

        if (posicion < pantalla - 120) {

            elemento.style.opacity = "1";

            elemento.style.transform = "translateY(0)";

        }

    });

}

window.addEventListener("scroll", mostrarElementos);

mostrarElementos();

/*=========================================================
        EFECTO SOBRE EL LOGO
=========================================================*/

const logo = document.querySelector(".logo img");

if (logo) {

    logo.addEventListener("mouseenter", () => {

        logo.style.transform = "scale(1.15) rotate(360deg)";

    });

    logo.addEventListener("mouseleave", () => {

        logo.style.transform = "scale(1)";

    });

}

/*=========================================================
            MENSAJE DE BIENVENIDA
=========================================================*/

window.addEventListener("load", () => {

    console.log("Proyecto Maracuyá Natural cargado correctamente.");

});

/*=========================================================
                FIN DE LA PARTE 1
=========================================================*/


/*=========================================================
            PROYECTO MARACUYÁ NATURAL
                SCRIPT.JS - PARTE 2
=========================================================*/

/*=========================================================
        EFECTO SUAVE EN LOS ENLACES
=========================================================*/

const enlacesMenu = document.querySelectorAll("nav a");

enlacesMenu.forEach(enlace => {

    enlace.addEventListener("mouseenter", () => {

        enlace.style.transition = "0.3s";

        enlace.style.transform = "translateY(-3px)";

    });

    enlace.addEventListener("mouseleave", () => {

        enlace.style.transform = "translateY(0px)";

    });

});

/*=========================================================
        EFECTO EN BOTONES
=========================================================*/

const botones = document.querySelectorAll("button, a");

botones.forEach(boton => {

    boton.addEventListener("mousedown", () => {

        boton.style.transform = "scale(.95)";

    });

    boton.addEventListener("mouseup", () => {

        boton.style.transform = "scale(1)";

    });

});

/*=========================================================
        EFECTO SOBRE LAS TARJETAS
=========================================================*/

const tarjetas = document.querySelectorAll(".tarjeta");

tarjetas.forEach(tarjeta => {

    tarjeta.addEventListener("mouseenter", () => {

        tarjeta.style.transition = ".4s";

        tarjeta.style.transform =

            "translateY(-12px)";

    });

    tarjeta.addEventListener("mouseleave", () => {

        tarjeta.style.transform =

            "translateY(0px)";

    });

});

/*=========================================================
            EFECTO EN IMÁGENES
=========================================================*/

const imagenes = document.querySelectorAll("img");

imagenes.forEach(imagen => {

    imagen.addEventListener("mouseenter", () => {

        imagen.style.transition = ".5s";

        imagen.style.filter =

            "brightness(110%)";

    });

    imagen.addEventListener("mouseleave", () => {

        imagen.style.filter =

            "brightness(100%)";

    });

});

/*=========================================================
        MENSAJE EN CONSOLA
=========================================================*/

console.log(

    "JavaScript Parte 2 cargado correctamente."

);

/*=========================================================
            FECHA AUTOMÁTICA
=========================================================*/

const fecha = new Date();

console.log(

    "Fecha de carga:",

    fecha.toLocaleDateString()

);

/*=========================================================
        EFECTO EN EL PRODUCTO DESTACADO
=========================================================*/

const producto = document.querySelector(".destacado");

if (producto) {

    producto.addEventListener("mouseenter", () => {

        producto.style.transition = ".5s";

        producto.style.transform = "scale(1.01)";

    });

    producto.addEventListener("mouseleave", () => {

        producto.style.transform = "scale(1)";

    });

}

/*=========================================================
        EFECTO EN BENEFICIOS
=========================================================*/

const beneficios = document.querySelectorAll(".beneficio");

beneficios.forEach(item => {

    item.addEventListener("mouseenter", () => {

        item.style.boxShadow =

            "0px 20px 40px rgba(0,0,0,.20)";

    });

    item.addEventListener("mouseleave", () => {

        item.style.boxShadow = "";

    });

});

/*=========================================================
        SALUDO EN LA CONSOLA
=========================================================*/

console.log(

    "Bienvenido al proyecto Maracuyá Natural."

);

/*=========================================================
        FIN PARTE 2
=========================================================*/