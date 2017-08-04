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
