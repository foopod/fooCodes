(function(){
    var app = angular.module('mysite', []);
    
    app.controller('PortfolioController', function($scope) {
        $scope.filters = '';
        this.projectList = portfolio;
    });

})();