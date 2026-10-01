
/* =====================================================
   DATOS QUE PUEDES PERSONALIZAR
===================================================== */

// Cambia esto por el nombre de tu amigo
const nombreAmigo = "Jair";


/* =====================================================
   OBTENER ELEMENTOS HTML
===================================================== */

const inicio = document.getElementById("inicio");
const sorpresa = document.getElementById("sorpresa");
const personalizacion = document.getElementById("personalizacion");
const modelo = document.getElementById("modelo");
const final = document.getElementById("final");

const caja = document.getElementById("caja");

const botonAbrir =
    document.getElementById("botonAbrir");

const botonPersonalizar =
    document.getElementById("botonPersonalizar");

const botonCrear =
    document.getElementById("botonCrear");

const botonMensaje =
    document.getElementById("botonMensaje");

const botonReiniciar =
    document.getElementById("botonReiniciar");


/* =====================================================
   DATOS DEL MODELO
===================================================== */

let colorSeleccionado = "azul-electrico";

let numeroSeleccionado = "01";

let estiloSeleccionado = "racing";


/* =====================================================
   COLOCAR NOMBRE
===================================================== */

document.getElementById("nombreCaja").textContent =
    nombreAmigo.toUpperCase();

document.getElementById("modeloNombre").textContent =
    nombreAmigo.toUpperCase();

document.getElementById("nombreFinal").textContent =
    nombreAmigo.toUpperCase();


/* =====================================================
   CAMBIAR PANTALLA
===================================================== */

function cambiarPantalla(pantallaNueva) {

    const pantallaActual =
        document.querySelector(".pantalla.activa");

    pantallaActual.classList.remove("activa");

    pantallaNueva.classList.add("activa");

    window.scrollTo(0, 0);
}


/* =====================================================
   ABRIR CAJA
===================================================== */

botonAbrir.addEventListener("click", function () {

    caja.classList.add("abierta");

    crearConfeti();

    setTimeout(function () {

        cambiarPantalla(sorpresa);

    }, 900);

});


/* =====================================================
   IR A PERSONALIZACIÓN
===================================================== */

botonPersonalizar.addEventListener(
    "click",
    function () {

        cambiarPantalla(personalizacion);

    }
);


/* =====================================================
   SELECCIONAR COLOR
===================================================== */

const botonesColor =
    document.querySelectorAll(".color");


botonesColor.forEach(function (boton) {

    boton.addEventListener("click", function () {

        /* Quita la selección anterior */

        botonesColor.forEach(function (elemento) {

            elemento.classList.remove(
                "seleccionado"
            );

        });

        /* Selecciona el nuevo */

        boton.classList.add("seleccionado");

        /* Guarda el color */

        colorSeleccionado =
            boton.dataset.color;

        /* Cambia el carrito */

        actualizarColor();

    });

});


/* =====================================================
   CAMBIAR COLOR DEL CARRITO
===================================================== */

function actualizarColor() {

    const carrito =
        document.querySelector(
            "#carritoPreview .carrito"
        );

    carrito.classList.remove(
        "color-azul-electrico",
        "color-azul-cielo",
        "color-azul-oscuro",
        "color-negro",
        "color-blanco"
    );

    if (
        colorSeleccionado !==
        "azul-electrico"
    ) {

        carrito.classList.add(
            "color-" + colorSeleccionado
        );

    }

}


/* =====================================================
   SELECCIONAR NÚMERO
===================================================== */

const botonesNumero =
    document.querySelectorAll(
        ".numero-btn"
    );


botonesNumero.forEach(function (boton) {

    boton.addEventListener("click", function () {

        botonesNumero.forEach(
            function (elemento) {

                elemento.classList.remove(
                    "seleccionado"
                );

            }
        );

        boton.classList.add(
            "seleccionado"
        );

        numeroSeleccionado =
            boton.dataset.numero;

        document.getElementById(
            "numeroPreview"
        ).textContent =
            numeroSeleccionado;

    });

});


/* =====================================================
   SELECCIONAR ESTILO
===================================================== */

const botonesEstilo =
    document.querySelectorAll(
        ".estilo"
    );


botonesEstilo.forEach(function (boton) {

    boton.addEventListener("click", function () {

        botonesEstilo.forEach(
            function (elemento) {

                elemento.classList.remove(
                    "seleccionado"
                );

            }
        );

        boton.classList.add(
            "seleccionado"
        );

        estiloSeleccionado =
            boton.dataset.estilo;

    });

});


/* =====================================================
   CREAR MODELO
===================================================== */

botonCrear.addEventListener(
    "click",
    function () {

        /* Actualiza número */

        document.getElementById(
            "numeroFinal"
        ).textContent =
            numeroSeleccionado;


        /* Actualiza nombre */

        document.getElementById(
            "modeloNombre"
        ).textContent =
            nombreAmigo.toUpperCase();


        /* Actualiza color */

        const nombresColor = {

            "azul-electrico":
                "AZUL ELÉCTRICO",

            "azul-cielo":
                "AZUL CIELO",

            "azul-oscuro":
                "AZUL OSCURO",

            "negro":
                "NEGRO",

            "blanco":
                "BLANCO"

        };

        document.getElementById(
            "modeloColor"
        ).textContent =
            nombresColor[colorSeleccionado];


        /* Actualiza estilo */

        const nombresEstilo = {

            racing: "RACING",

            turbo: "TURBO",

            street: "STREET"

        };

        document.getElementById(
            "modeloEstilo"
        ).textContent =
            nombresEstilo[estiloSeleccionado];


        /* Copia el color al carrito final */

        const carritoFinal =
            document.querySelector(
                "#carritoFinal"
            );

        carritoFinal.classList.remove(
            "color-azul-cielo",
            "color-azul-oscuro",
            "color-negro",
            "color-blanco"
        );

        if (
            colorSeleccionado !==
            "azul-electrico"
        ) {

            carritoFinal.classList.add(
                "color-" +
                colorSeleccionado
            );

        }


        /* Cambia de pantalla */

        cambiarPantalla(modelo);

        crearConfeti();

    }
);


/* =====================================================
   VER MENSAJE
===================================================== */

botonMensaje.addEventListener(
    "click",
    function () {

        cambiarPantalla(final);

        crearConfeti();

    }
);


/* =====================================================
   REINICIAR EXPERIENCIA
===================================================== */

botonReiniciar.addEventListener(
    "click",
    function () {

        caja.classList.remove("abierta");

        cambiarPantalla(inicio);

    }
);


/* =====================================================
   CONFETI
===================================================== */

function crearConfeti() {

    const cantidad = 70;

    for (
        let i = 0;
        i < cantidad;
        i++
    ) {

        const confeti =
            document.createElement("div");

        confeti.style.position = "fixed";

        confeti.style.width =
            Math.random() * 8 + 4 + "px";

        confeti.style.height =
            Math.random() * 8 + 4 + "px";

        confeti.style.background =
            obtenerColorConfeti();

        confeti.style.left =
            Math.random() * 100 + "vw";

        confeti.style.top = "-20px";

        confeti.style.zIndex = "9999";

        confeti.style.pointerEvents =
            "none";

        document.body.appendChild(
            confeti
        );


        const duracion =
            Math.random() * 2000 + 1500;


        confeti.animate(

            [
                {
                    transform:
                        "translateY(0) rotate(0deg)",
                    opacity: 1
                },

                {
                    transform:
                        "translateY(110vh) rotate(720deg)",
                    opacity: 0
                }
            ],

            {
                duration: duracion,
                easing: "ease-in",
                fill: "forwards"
            }

        );


        setTimeout(function () {

            confeti.remove();

        }, duracion);

    }

}


/* =====================================================
   COLORES DEL CONFETI
===================================================== */

function obtenerColorConfeti() {

    const colores = [

        "#008cff",
        "#00c8ff",
        "#55d9ff",
        "#ffffff",
        "#1769ff"

    ];

    const posicion =
        Math.floor(
            Math.random() *
            colores.length
        );

    return colores[posicion];

}

