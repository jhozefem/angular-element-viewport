var elements = [];

function insertElement(element) {
    elements.push(element);
}

function checkElements() {
    for (var index in elements) {
        var element = elements[index];

        if (inViewport(element)) {
            // chamar método
        }
    }
}
