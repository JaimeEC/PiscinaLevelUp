function execute() {

    // JSON origen de datos
    data = {
        'e': '1',
        'b': '4',
        'd': '2',
        'c': "0",
        'a': '5'
    };

    // Origen por textarea
    let input = document.getElementById("input");
    
    if (input.value !== "") {
        try {
            data = JSON.parse(input.value);
            sortJson(data);
        } catch {
            showIO("No cuenta con el formato necesario", 0, 1);
        }
    } else {
        sortJson(data);
    }


}

function sortJson(data) {

    showIO(JSON.stringify(data), 0, 0);

    // Obtenemos el listado de keys
    kList = Object.keys(data);

    // Ordenamos la lista
    kSortList = kList.sort();

    // Generamos una nueva lista de los valores iterando las keys ordenadas
    vSortList = kSortList.map(key => data[key]);

    // Mostramos el resultado
    showIO("Keys ordenadas: [" + kSortList + "]", 0, 1);
    showIO("Values ordenadas: [" + vSortList + "]", 1, 1);
    
    
    showIO("\nResultado: [ [" + kSortList + "], [" + vSortList + "] ]", 1, 1);

    resultSort = [];
    resultSort.push(kSortList);
    resultSort.push(vSortList);
    console.log(resultSort);
}

function showIO(text, method, io) {
    
    let ioContainer = (io == 0)? document.getElementById("input") : document.getElementById("output");

    if (method == 1) {
        ioContainer.value += ("\n" + text);
    } else {
        ioContainer.value = text;
    }
}