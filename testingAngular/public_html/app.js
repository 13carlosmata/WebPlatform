/* global angular */
(function(){
    var app = angular.module('store', []);
    app.controller('StoreController',function(){ 
        this.products = gems;
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
                },
            ]
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
            ]
        }
    ]
    
})();
