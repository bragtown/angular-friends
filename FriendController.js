app.controller('friendControl', function($scope, $http){
	$scope.text = 'hey, angular works';
	$http.get('https://s3.amazonaws.com/intuiplan_company_files/production/files/public/FriendData.json').success(function(data){
		$scope.friends = data.results;
		console.table($scope.friend);
		angular.forEach($scope.friends, function(friend){
			friend.friend_count = parseInt(friend.friend_count, 10);
		});

	});
});



