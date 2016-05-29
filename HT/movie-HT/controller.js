var movieApp = angular.module('movieApp', []);
// var apiUrl = 'http://localhost:3020/';
movieApp.controller('movieController', function($scope, $http) {
    // $scope.message = "hello world";
    var movieURL = 'https://api.themoviedb.org/3/movie/now_playing?api_key=5e2170b9fb801a61d6d784870c4c2eb1';
    var api_key = 'api_key=5e2170b9fb801a61d6d784870c4c2eb1';
    $scope.imagePath = "https://image.tmdb.org/t/p/w300";


    $http({
        method: 'GET',
        url: movieURL,
    }).then(function(movieData) {
        $scope.movieData = movieData.data.results;
        console.log(movieData);
    }, function(movieData) {
        console.log('There was an  error!!');
    });

    $scope.movieSearch = function() {
        console.log($scope.searchTerm);
        console.log($scope.selected);
        if ($scope.selected == 'person') {
            console.log($scope.selected);
            searchURL = 'https://api.themoviedb.org/3/search/person?search_type=ngram&query=' + encodeURI($scope.searchTerm) + '&' + api_key;
        } else {
            searchURL = 'https://api.themoviedb.org/3/search/movie?api_key=5e2170b9fb801a61d6d784870c4c2eb1&query=' + encodeURI($scope.searchTerm);
        }
        $http({
            method: 'GET',
            url: searchURL,
        }).then(function(movieData) {
            $scope.movieData = movieData.data.results;
            console.log(movieData);
        }, function(movieData) {
            console.log('There was an  error!!');
        });
    };


});