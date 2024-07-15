export const PROJECT_NAME = "algodonia";

export const PROJECT_NUMBER = "962 549 990";
export const PROJECT_EMAIL = "atencionalcliente@algodonia.com";
export const PROJECT_SOCIAL = {
    facebook: "https://www.facebook.com/",
    instagram: "https://www.instagram.com/"
}



export const RoutesNav = [
    {
        name: "STARTER PACK [PLUMÓN + FUNDA]",
        route: "/starter-pack-plumon-funda"
    },
    {
        name: "CAMA",
        route: "/bed",
        subRoutes: [
            {
                name: "VER TODO",
                route: "/about",
            },
            {
                name: "ALMOHADAS HIPOALERGÉNICAS",
                route: "/about",
            },
            {
                name: "BED TOPPER",
                route: "/about",
            },
            {
                name: "FUNDAS DE PLUMÓN/CUBRECAMAS",
                route: "/about",
            },
            {
                name: "SÁBANAS",
                route: "/about",
            },
            {
                name: "PLUMÓN HIPOALERGÉNICO",
                route: "/about",
            },
            {
                name: "PROTECTOR DE COLCHÓN",
                route: "/about",
            },
            {
                name: "FUNDAS DE ALMOHADA",
                route: "/about",
            },
            {
                name: "PROTECTORES DE ALMOHADA",
                route: "/about",
            },
        ]
    },
    {
        name: "BAÑO Y SPA",
        route: "/bath",
        subRoutes: [
            {
                name: "VER TODO",
                route: "/about",
            },
            {
                name: "TOALLAS",
                route: "/about",
            },
            {
                name: "PISOS DE BAÑO",
                route: "/about",
            },
            {
                name: "PORTACEPILLOS",
                route: "/about",
            },
            {
                name: "DISPENSADORES",
                route: "/about",
            },
            {
                name: "ANTIFACES",
                route: "/about",
            },
            {
                name: "BATAS",
                route: "/about",
            },
            {
                name: "TURBANTES",
                route: "/about",
            },
            {
                name: "PANTUFLAS",
                route: "/about",
            },
        ]
    },
    {
        name: "DECORACIÓN",
        route: "/decor",
        subRoutes: [
            {
                name: "VER TODO",
                route: "/about",
            },
            {
                name: "COJINES",
                route: "/about",
            },
            {
                name: "JARRONES",
                route: "/about",
            },
            {
                name: "SERVILLETAS",
                route: "/about",
            },
            {
                name: "RELOJ DE ARENA",
                route: "/about",
            },
        ]
    },
    {
        name: "ORGANIZACIÓN",
        route: "/setup",
        subRoutes: [
            {
                name: "VER TODO",
                route: "/about",
            },
            {
                name: "CESTAS",
                route: "/about",
            },
            {
                name: "BOLSAS AL VACIO",
                route: "/about",
            },
            {
                name: "PORTA SABANAS",
                route: "/about",
            },
        ]
    },
    {
        name: "📍NUESTRAS TIENDAS📍",
        route: "/stores"
    },
]


export const categories = [
    {
        name: "CAMA",
        image: "/categories/bed.png",
        route: "bed",

    },
    {
        name: "BAÑO Y SPA",
        image: "/categories/bath.png",
        route: "bath",

    },
    {
        name: "DECORACIÓN",
        image: "/categories/decor.png",
        route: "decor",

    },
    {
        name: "ORGANIZACIÓN",
        image: "/categories/setup.png",
        route: "setup",

    }

]