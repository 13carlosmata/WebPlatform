(function() {
  var app = angular.module('store-directives', []);
  app.directive("productDescription", function() {
      return {
          restrict: "E",
          templateUrl: "product-description.html"
      };
  });
  app.directive("productSpecs", function() {
      return {
          restrict: "E",
          templateUrl: "product-specs.html"
      };
  });
  app.directive("productReviews", function() {
      return {
          restrict: 'E',
          templateUrl: "product-reviews.html"
      };
  });
  app.directive("productTabs", function() {
      return {
          restrict: "E",
          templateUrl: "product-tabs.html",
          controller: function() {
              this.tab = 1;
              
              this.isSet = function(checkTab) {
                  return this.tab === checkTab;
              };
              
              this.setTab = function(activeTab) {
                  this.tab = activeTab;
              };
          },
          controllerAs: "tab"
      };
  });  
})();
