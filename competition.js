var app = angular.module("myApp", []);
app.controller("myCtrl", function($scope, $http) {

    $scope.register = function(regForm) {
        $scope.name = $scope.reg_name;
        $scope.email = $scope.reg_email;
        $scope.password = $scope.reg_pass;
        $scope.repassword = $scope.reg_repass;
        $scope.registration = {
            "name": $scope.name,
            "email": $scope.email,
            "password": $scope.password,
            "repassword": $scope.reg_repass
        }
        console.log('register:', $scope.registration);
        if (regForm.$valid) {
            var req = {
                method: 'POST',
                url: 'https://tamam-sails.herokuapp.com/registration',
                headers: {
                    'Content-Type': 'application/json'
                },
                data: $scope.registration
            }
            $http(req).then(function(successData) {
                $scope.reg_name = undefined;
                $scope.reg_email = undefined;
                $scope.reg_pass = undefined;
                $scope.reg_repass = undefined;
                // console.log('thomas:', successData);
                $scope.regForm.$setPristine();
                $scope.regForm.$setUntouched();
                $('#myModal').modal('show');
                
            });
        }

    };
    $scope.closepop = function() {
        $('#myModal').modal('hide');
        $('.modal-backdrop').remove();
    };
    $scope.signin = function() {
        $scope.signname = $scope.sign_email;
        $scope.signpassword = $scope.sign_password;
        $scope.signinobj = {
            "name": $scope.signname,
            "password": $scope.signpassword
        }
        console.log('signin:', $scope.signinobj);
    };
});
