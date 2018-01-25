/* global angular */
(function(){
    var app = angular.module('store', ['store-directives']);
        
    app.controller('StoreController',['$http',function($http){
        var store = this;
        store.products = [];
        $http.get('gems.json').success(function(data){
            store.products = data;
        });
    }]);
        
    app.controller('ReviewController',function(){
        this.review = {};
        this.addReview = function(product){
            this.review.createdOn=Date.now();
            product.reviews.push(this.review);
            this.review={};
        };
    });
    var gems = [
        {
            name:'Uno',
            price: 2.95,
            description: 'mae uno',
            button1: true,
            sold:true,
            images: [
                'images/KTH_logo_thumb.png',
                "images/kth_logo_full.png"
            ],
            reviews: [{
                    stars: 5,
                    body: "es varas",
                    author: "Kali",
                    createdOn: 1397490980837
                },{
                    stars: 4,
                    body: "ta bom",
                    author: "wiwi",
                    createdOn: 1397490980837
            }]
            
        },
        {
            name:"Dos",
            price:5.95,
            description:'mae dos',
            button1:true,
            sold:false,
            images: [
                'images/kth_logo_full.png',
                'images/KTH_logo_thumb.png'
            ],
            reviews:[{
                    stars: 3,
                    body: "boh",
                    author: "toribio",
                    createdOn: 1397490980837
                },{
                    stars: 1,
                    body: "no",
                    author:"wawa",
                    createdOn: 1397490980837
                }
            ]
        }
    ]
        
})();
