var myModule = angular.module('myModule')

myModule.directive('ngParticles',['$document','$window', '$interval',function($document,$window,$interval){
	return{
		restrict: 'A',
		link: function(scope,element,attr){
			var canvas = angular.element(document.getElementById("particles"));
			var ctx = canvas[0].getContext("2d");
			//var w = canvas[0].clientWidth;
			//var h = canvas[0].clientHeight;
			

			var w = $window.innerWidth;
			var h = $window.innerHeight;

			canvas[0].width= w*0.98;
			canvas[0].height=h*0.8;

			var drawing;
			var particles=[];

			//create 15 particles
			for(var i = 0; i<15;i++)
			{
				particles.push(new Particle());
			}

			//particle location/velocity/size
			function Particle()
			{
				this.x=Math.random()*w;
				this.y=Math.random()*h;

				this.vx=Math.random()*2 -1;
				this.vy=Math.random()*2 -1;

				this.radius= Math.random()*4 +1;
			}
			

			function draw()
			{
				ctx.globalCompositeOperation = "source-over";
				ctx.clearRect(0,0,w,h);

				for(var t = 0; t<particles.length; t++)
				{
					var p = particles[t];
					ctx.beginPath();
					ctx.fillStyle="rgba(255,255,255,0.5)";
					ctx.arc(p.x,p.y,p.radius,Math.PI*2,false);
					ctx.fill();

					p.x+=p.vx;
					p.y+=p.vy;

					if(p.x < -50) p.x = w+50;
					if(p.y < -50) p.y = h+50;
					if(p.x > w+50) p.x = -50;
					if(p.y > h+50) p.y = -50;
				}

			}

			//ever 30 milliseconds, draw
			drawing = $interval(function(){
				draw();
			},30);
		}
	};
}]);