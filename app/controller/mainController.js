var mainController = app.controller('mainController', function (ngDialog) {
    'use strict';
    
    var vm = this;
    
    vm.aboutLink = function () {
        ngDialog.open({
            template: '/views/about.html',
            className: 'ngdialog-theme-default',
            width: '80%'
        });
    };

    vm.openImage = function (src) {
        //ngDialog.open({
        //    template: "<img ng-src='" + src + "' /img>",
        //    plain: true,
        //    scope: src,
        //    className: 'ngdialog-theme-default'
        //});
    };

    vm.title = "12/25/2016";
    vm.body = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.';
});