var app = angular.module("userApp", []);
app.directive("usernameInput", function() {
    return {
        template : "Username: <input type='text'></h1><br>"
    };
}),
app.directive("firstnameInput", function() {
    return {
        template : "Firstname: <input type='text'></h1><br>"
    };
}),
app.directive("lastnameInput", function() {
    return {
        template : "Lastname: <input type='text'></h1><br>"
    };
}),
app.directive("emailInput", function() {
    return{
        template : `<form ng-app="" name="myForm">
        Email:
        <input type="email" name="myAddress" ng-model="text">
        <span ng-show="myForm.myAddress.$error.email">Not a valid e-mail address</span>
        </form>`
    };
}),
app.directive("confirmEmailInput", function() {
    return {
        template : "Confirm email: <input type='text'></h1><br>"
    };
}),
app.directive("passwordInput", function() {
    return {
        template : "Password: <input type='text'></h1><br>"
    };
});
app.directive("confirmPasswordInput", function() {
    return {
        template : "Confirm password: <input type='text'></h1><br>"
    };
});
app.directive("createAccountButton", function() {
    return {
        template : "<button>Sign up</button>"
    };
});
