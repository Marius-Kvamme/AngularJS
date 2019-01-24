var app = angular.module("userApp", []);
app.directive("userNameInput", function() {
    return {
        template : "Username: <input type='text'></h1>"
    };
}),
app.directive("passwordInput", function() {
    return {
        restrict: "A",
        template : "Password: <input type='text'></h1>"
    };
});