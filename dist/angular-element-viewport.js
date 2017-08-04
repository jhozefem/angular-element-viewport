angular
    .module('element-viewport')
    .directive('inViewport', inViewportDirective);

inViewportDirective.$inject = [
    '$timeout'
];

function inViewportDirective($timeout) {
    return {
        restrict: 'A',
        replace: true,
        link: function(scope, element, attrs) {
            $timeout(function() {
                scope.$watch(attrs.inViewportDirective, function() {
                    insertElement(element);
                });
            }, 0);
        }
    };
}

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

function inViewport(element) {
    var coordinates = element.getBoundingClientRect();

    return (
        coordinates.top <= (window.innerHeight || document.documentElement.clientHeight) &&
        coordinates.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

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
