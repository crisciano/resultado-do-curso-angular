
(function (){
	var app = angular.module('store-products', []);
	
	app.directive('productDetails', function(){
		return{
			restrict: 'E',
			templateUrl: 'theme/product.html'
		};
	});

	app.directive('productPanels', function(){
		return{
			restrict: 'E',
			templateUrl: 'theme/product-panels.html',
			//function controller dentro da propria directiva
			controller: function(){
				this.tab = 1;

				this.selectTab = function(setTab){
					this.tab = setTab;
				};
				
				this.isSelected = function(checkTab){
					return this.tab === checkTab;
				};

			},
			// elemento que vai ser usado no template
			controllerAs: 'panel'
		};
	});
	
})();
