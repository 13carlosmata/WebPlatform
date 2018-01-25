/* global angular */
(function(){
    var app = angular.module('store', []);
    app.controller('StoreController',function(){ 
        this.products = gems;
    });
    app.controller('TabController', function(){
        this.tab = 1;
        this.setTab = function(value){
            this.tab = value;            
        };
        this.isSet = function(checkTab){
            return this.tab === checkTab;
        };
    });
    app.controller('ReviewController',function(){
        this.review = {};
        this.addReview = function(product){
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
                {
                    full:'images/kth_logo_full.png',
                    thumb:'images/KTH_logo_thumb.png'
                }
            ],
            reviews: [{
                    stars: 5,
                    body: "es varas",
                    author: "Kali",
                    createdOn: 180124
                },{
                    stars: 4,
                    body: "ta bom",
                    author: "wiwi",
                    createdOn: 190124
            }]
            
        },
        {
            name:"Dos",
            price:5.95,
            description:'mae dos',
            button1:true,
            sold:false,
            images: [
                {
                    thumb:'images/kth_logo_full.png',
                    full:'images/KTH_logo_thumb.png'
                },
            ],
            reviews:[{
                    stars: 3,
                    body: "boh",
                    author: "toribio",
                    createdOn: 200121
                },{
                    stars: 1,
                    body: "no",
                    author:"wawa",
                    createdOn: 230019
                }
            ]
        }
    ]
    
})();
