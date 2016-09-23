var myModule = angular.module('myModule');

myModule.directive('ngScrollSmooth',['$document', function($document){
	return{
		restrict:'A',
		link: function(scope,element,attr){
			var duration = 1500;
			var offset = attr.offset;
			element.on('click', function(){
				var scrollElement = angular.element(document.getElementById(attr.ngScrollSmooth));
				$document.scrollToElement(scrollElement, parseInt(offset), duration);
			});
		}
	};
}]);