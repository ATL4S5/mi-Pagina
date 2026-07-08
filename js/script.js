function filtrarFavoritos() {
    let input = document.getElementById('buscador').value.toLowerCase();
    let cajas = document.querySelectorAll('.caja');

    cajas.forEach(caja => {
        let texto = caja.textContent.toLowerCase();
        if (texto.includes(input)) {
            caja.style.display = "block";
        } else {
            caja.style.display = "none";
        }
    });
}