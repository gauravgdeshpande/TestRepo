angular.module('MyApp',['ngMaterial', 'ngMessages', 'material.svgAssetsCache'])

  .controller('AppCtrl', function($scope) {
    $scope.showHints = true;

    $scope.user = {
      name: "",
      email: "",
      social: "123456789",
      phone: "N/A"
    };
  });


/**
Copyright 2016 Google Inc. All Rights Reserved. 
Use of this source code is governed by an MIT-style license that can be in foundin the LICENSE file at http://material.angularjs.org/license.
**/