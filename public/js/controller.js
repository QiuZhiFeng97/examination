var app = angular.module('App',[]);

app.controller('mainController',function($scope,$http){
    $scope.name = "AngularJS";
    $http.get('/data')
        .then(function(response){
            $scope.data = response.data;
            load(response.data);
             
        });

    $scope.change = function(){
        console.log('change');
        $scope.show = false;
    };
    var load = function(data){
    var index = 0;
    var length = data.length;
    $scope.question = data[0].question;
    $scope.choises = data[0].choises;
    $scope.next = function(){
        console.log('进入下一题');
        index++;
        if(index < length){
            $scope.question = data[index].question;
            $scope.choises = data[index].choises;
        }
        else{
            console.log('答题完毕');
        }
        
        }
    }   
});

