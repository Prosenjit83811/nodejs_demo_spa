var app = angular.module('myApp', ['ngRoute'])

app.config(["$routeProvider", function($routeProvider){
    $routeProvider.
        when("/", {
            templateUrl: 'home',
            controller: 'user_controller'
        }).
        when("/about", {
            templateUrl: 'about',
            controller: 'about_controller'
        }).
        otherwise({
            redirectTo: 'home'
        })
}]);

app.controller("user_controller", function($scope){
    $scope.users = [
        {firstname: 'Prosenjit', lastname: 'Sarkar', county: 'India'},
        {firstname: 'Papai', lastname: 'Sarkar', county: 'India'}
    ];
    $scope.description = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
})

app.controller("about_controller", function($scope){
    $scope.description = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
})