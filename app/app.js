(function(){
	//var app = angular.module('app', []);
	var app = angular.module('store', ['store-products']);

	app.controller('StoreController', function(){
		this.products = gems;
	});

	/**app.controller('StoreController', ['$http' ,function($http){
		var store = this;

		store.products = [];

		$http.get('json/products.json').success(function(data){
			store.products = data;
		});		
	}]);**/

	app.controller('ReviewController', function(){
		this.review = {};

		this.addReview = function(product){
			product.reviews.push(this.review);
			this.review = {'createdOn': Date.now()};
			this.review = {};
		};

	});

	/**
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
	**/

	/**
	app.controller('PanelController', function(){
		this.tab = 1;

		this.selectTab = function(setTab){
			this.tab = setTab;
		};
		
		this.isSelected = function(checkTab){
			return this.tab === checkTab;
		};
	});**/

	var gems = [
		{
			title: "produto 1",
			description: "descrição do produto 2",
			price: 2.95,
			// true o button aparece false o button some
			canPurchase: false,
			specific : " detalhes tecnicos do produto",
			// ng-show pra aparecer que tem um desconto 
			checkedDesconto: true,
			// valor que vai aparecer no desconto
			desconto: "img/descontos/10.png",
			reviews: [
				{
					stars: 5,
					body: "I love this product!",
					author: "joe@thomas.com"
				},
				{
					stars: 1,
					body: "This product sucks!",
					author: "tim@hater.com"
				}
			],
			images: [
				"img/product/2.jpg",
				"img/product/3.jpg",
				"img/product/4.jpg"
				]
		},
		{
			title: "produto 2",
			description: "descrição do produto 2",
			price: 5.95,
			// true o button aparece false o button some
			canPurchase: false,
			specific : " detalhes tecnicos do produto",
			checked: false,
			reviews: [
				{
					stars: 5,
					body: "I love this product!",
					author: "joe@thomas.com"
				},
				{
					stars: 1,
					body: "This product sucks!",
					author: "tim@hater.com"
				}
			],
			images: [
				"img/product/5.jpg",
				"img/product/7.jpg",
				"img/product/8.jpg",
				"img/product/17.jpg"
				]
		},
		{
			title: "produto 3",
			description: "descrição do produto 2",
			price: 5.95,
			// true o button aparece false o button some
			canPurchase: false,
			specific : " detalhes tecnicos do produto",
			// ng-show pra aparecer que tem um desconto 
			checkedDesconto: true,
			// valor que vai aparecer no desconto
			desconto: "img/descontos/50.png",
			checked: false,
			reviews: [
				{
					stars: 5,
					body: "I love this product!",
					author: "joe@thomas.com"
				},
				{
					stars: 1,
					body: "This product sucks!",
					author: "tim@hater.com"
				}
			],
			images: [
				"img/product/9.jpg",
				"img/product/10.jpg",
				"img/product/11.jpg"
				]
		},
		{
			title: "produto 4",
			description: "descrição do produto 2",
			price: 5.95,
			// true o button aparece false o button some
			canPurchase: false,
			specific : " detalhes tecnicos do produto",
			checked: false,
			reviews: [
				{
					stars: 5,
					body: "I love this product!",
					author: "joe@thomas.com"
				},
				{
					stars: 1,
					body: "This product sucks!",
					author: "tim@hater.com"
				}
			],
			images: [
				"img/product/12.jpg",
				"img/product/13.jpg",
				"img/product/14.jpg"
				]
		},
		{
			title: "produto 5",
			description: "descrição do produto 2",
			price: 5.95,
			// true o button aparece false o button some
			canPurchase: false,
			specific : " detalhes tecnicos do produto",
			checked: false,
			reviews: [
				{
					stars: 5,
					body: "I love this product!",
					author: "joe@thomas.com"
				},
				{
					stars: 1,
					body: "This product sucks!",
					author: "tim@hater.com"
				}
			],
			images: [
				"img/product/15.jpg",
				"img/product/16.jpg",
				"img/product/17.jpg"
				]
		}
	];

	
})();
