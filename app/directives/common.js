'use strict';

app.directive('navigation', function () {
    return {
        restrict: 'E',
        replace: true,
        templateUrl: 'app/templates/mainNavigation.html'
    };
});

app.directive('messagePanel', function () {
    return {
        restrict: 'E',
        replace: true,
        scope: {
            title: '=',
            body: '='
        },
        templateUrl: 'app/templates/messagePanel.html'
    };
});

app.directive('imageBox', function () {
    return {
        restrict: 'E',
        replace: true,
        scope: {
            src: '@',
            thumb: '@',
            expand: '&',
            title: '@',
            description: '@',
            width: '@',
            height: '@'
        },
        link: function (scope, element, attrs) {
            element.bind("click", function () {
                scope.expand({ src: scope.src });
            });
        },
        templateUrl: 'app/templates/imageBox.html'
    };
});

app.directive('footerNavigation', function () {
    return {
        restrict: 'E',
        replace: true,
        scope: {
            src: '@',
            title: '@',
            description: '@'
        },
        templateUrl: 'app/templates/footerNavigation.html'
    };
});

app.directive('jumboTron', function () {
    return {
        restrict: 'E',
        replace: true,
        scope: {
            title: '@',
            description: '='
        },
        templateUrl: 'app/templates/jumboTron.html'
    };
});