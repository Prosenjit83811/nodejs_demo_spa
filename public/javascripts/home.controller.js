app.controller("user_controller", function($scope){
    $scope.users = [
        {firstname: 'Prosenjit', lastname: 'Sarkar', county: 'India'},
        {firstname: 'Papai', lastname: 'Sarkar', county: 'India'}
    ];
    $scope.description = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
})