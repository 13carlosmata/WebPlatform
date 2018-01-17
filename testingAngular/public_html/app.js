/* global angular */
(function(){
    var app = angular.module('store', []);
    app.controller('StoreController',function(){ 
        this.products = gems;
    });
    var gems = [
        {
            name:'Dodecahedron',
            price: 2.95,
            description: 'mae uno',
            button1: true,
            sold:true
        },
        {
            name:"pentag gem",
            price:5.95,
            description:'mae dos',
            button1:false,
            sold:false,
        }
    ]
    
})();
