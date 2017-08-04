function inViewport(element) {
    var coordinates = element.getBoundingClientRect();

    return (
        coordinates.top <= (window.innerHeight || document.documentElement.clientHeight) &&
        coordinates.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}
