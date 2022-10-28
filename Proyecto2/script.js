function execute(mode) {

    // Se obtiene el input del documento
    let show = document.getElementById("show");
    
    // Se obtiene el valor y se convierte en un numero.
    let value = +show.value;

    // Segun el modo se operará el valor
    switch (mode) {
        case 1:  // Increase
            value ++;
            break;
        case 2:  // Decrease
            value --;
            break;
        case 3:   // Reset
            value = 0;
            break;
        default:  // Por defecto no cambiara su valor
            break;
            
        }
    // Se evalua el numero y se establecen los colores de texto
    textSetColor = (value > -1)? "text-success" : "text-danger";
    textRemoveColor = (value > -1)? "text-danger" : "text-success";

    // Se cambian las clases que se aplican al input
    show.classList.remove(textRemoveColor);
    show.classList.add(textSetColor);
    
    // Se establece el nuevo valor para el input
    show.value = value;
}