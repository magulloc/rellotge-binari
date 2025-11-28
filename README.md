# Reloj Binario — Extensión de navegador

Esta extensión muestra un reloj binario minimalista en el popup del navegador, con opciones de personalización como el color de los bits y la visualización del reloj digital.

---

## Funcionalidades
- Reloj binario generado con **p5.js**
- Opción para mostrar u ocultar la hora digital
- Selector de color personalizado para los bits
- Icono de configuración integrado

---

## Tecnologías utilizadas
- **HTML, CSS y JavaScript**
- **p5.js**
- API de **WebExtensions** (Firefox/Chrome)

---

## Instalación (Modo desarrollador)
1. Clona el repositorio:

   git clone https://github.com/magulloc/rellotje-binari.git


2. Esta extensión ha sido desarrollada y testeada únicamente en Firefox:

- Abre Firefox y escribe en la URL: `about:debugging`
- Selecciona la opción *“This Firefox”*
- Haz clic en *“Load Temporary Add-on”*
- Carga el archivo `manifest.json`

---

## Estructura del proyecto

/extensio-rellotge-binari
│── manifest.json
│── p5.min.js
│── README.md
│── .gitignore
│
├── popup/
│   ├── popup.html
│   ├── popup.js
│   └── popup.css
│
├── options/
│   ├── options.html
│   ├── options.js
│   └── options.css
│
└── icons/
    └── icon.png


## Mejoras futuras
- Ventana flotante tipo “Picture-in-Picture” para mantener el reloj siempre visible  
- Nuevos temas y esquemas de color

---

## Licencia  
MIT License

---

## Autor  
Marc Agulló  
Puedes usar, modificar o compartir este proyecto libremente bajo los términos de la licencia MIT.
