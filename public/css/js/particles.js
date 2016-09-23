var myModule = angular.module('myModule')

myModule.directive('ngParticles',['$document','$window',function($document,$window){
	return{
		restrict: 'A',
		link: function(scope,element,attr){
			var canvas = angular.element(document.getElementById("particles"));
			var ctx = canvas[0].getContext("2d");
			var w = 1000;
			var h = 600;
	

			var x = 100;
			var y = 100;

			var particles = [];
			for(var i = 0; i<50;i++){
				particles.push(new create_particle());
			}

			ctx.fillStyle="white";
			ctx.fillRect(300,200,10,10);
			
			function create_particle()
			{
				this.x=Math.random()*w;
				this.y=Math.random()*h;

				this.vx = Math.random()*20-10;
				this.vy=Math.random()*20-10;

				this.radius=Math.random()*20+20;
			}
			
			function draw()
			{

				for(var t = 0;t<particles.length;t++)
				{
					var p = particles[t];
				ctx.beginPath();
				ctx.fillStyle="white";
				ctx.arc(p.x,p.y,40,Math.Pi*2,false);
				ctx.fill();
				p.y+= p.vx;
				p.x+= p.vy;
				}
			}

			setInterval(draw,33);
		}
	};
}]);