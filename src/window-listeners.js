var CHECK_ELEMENTS_TIMEOUT = 300;
var timeoutRef;

function checkElementsHandler() {
    if (timeoutRef) {
        clearTimeout(timeoutRef);
    }

    timeoutRef = setTimeout(checkElements, CHECK_ELEMENTS_TIMEOUT);
}

window.addEventListener('scroll', checkElementsHandler);
window.addEventListener('resize', checkElementsHandler);
