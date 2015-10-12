var myapp =angular.module('moviemasthi',[]);

myapp.controller('meracontroller', function($scope,$http){

	$scope.moviename = "";
	$scope.movies = [];
	
	$scope.addMovie = function() {
		var url = "http://www.omdbapi.com/?t="+$scope.moviename+"&y=&plot=short&r=json";
		
		$http.get(url).success(function(data){
			$scope.movies.push(data);
			$scope.moviename = "";
			
		});
		
		
	};
	
});