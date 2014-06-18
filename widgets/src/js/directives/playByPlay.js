angular.module('hsgc')
  .directive('playByPlay', function() {
    return {
      restrict: 'AE',
      transclude: true,
      scope: { gameId: "@"},
      controller: ['$scope', '$element', '$http', function($scope, $element, $http) {
        var url = 'http://api.gray.hsgamecenter.com/games/' + $scope.gameId + '?includePlayByPlay=true';
        $http.get(url)
          .success(function(data) {
            $scope.playByPlay = data.PlaysInGame;
            $scope.currentPeriod = 1; //todo: if game is live, show current period, otherwise show first period
          });
      }],
      templateUrl: 'templates/playByPlay.html',
      replace: true
    };
  });