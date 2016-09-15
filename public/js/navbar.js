var myModule = angular.module('myModule')

myModule.directive('ngNavbarCover',['$document','$window',function($document,$window){
	return{
		restrict: 'A',
		link: function(scope,element,attr){
			var navbarRevealer = angular.element(document.getElementById('navTick'));
			scope.onScrollFunction = function(){
				var startLocation=element[0].offsetTop;

				if($window.scrollY==startLocation)
				{	
					element.removeClass("navbar-white");
					element.removeClass("navbar-shadow");
					element.addClass("navbar-transparent");
				}
				else
				{
					element.removeClass("navbar-transparent");
					
					element.addClass("navbar-shadow");
				
				}
			}
			scope.onScrollFunction();
			angular.element($window).bind('scroll resize',function(){
				scope.onScrollFunction();
				scope.$digest();
			});
		}
	};
}]);
