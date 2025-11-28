// Polyfill per si p5 no ha exposat getItem()/storeItem com a globals en aquesta pàgina.
if (typeof getItem === "undefined") {
  function getItem(key) {
    const raw = window.localStorage.getItem(key);

    return raw;
  }
}

if (typeof storeItem === "undefined") {
  function storeItem(key, value) {
    // Guardem sempre com a string
    window.localStorage.setItem(key, value);
  }
}



document.addEventListener('DOMContentLoaded', () => {
    const checkbox = document.getElementById("mostrarHora");
    const colorPicker = document.querySelector("#bitColorPicker"); 

    // Recuperar valors guardats
    checkbox.checked = getItem("mostrarHora") ?? 'false';
    colorPicker.value = getItem('bitColorPicker') || "#5a96ff";

    // Guardar canvis
    checkbox.addEventListener('change', () => {
        storeItem('mostrarHora', checkbox.checked);
    });

    colorPicker.addEventListener('input', () => {
        storeItem('bitColorPicker', colorPicker.value);
    });
});

