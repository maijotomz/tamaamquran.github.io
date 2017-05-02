var app = angular.module("myApp", []);
app.controller("myCtrl", function($scope, $http) {

    $scope.newslist = [];
    $scope.getnews = function() {
        var req = {
            method: 'GET',
            url: 'https://tamam-sails.herokuapp.com/news',
            headers: {
                'Content-Type': 'application/json'
            },
            data: $scope.registration
        }
        $http(req).then(function(successData) {
            $scope.newslist = successData.data;
            console.log('thomas:', $scope.newslist);
        });
    };

    $scope.getnews();

});
