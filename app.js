/**
 * Created by osin on 11/04/16.
 */
angular.module('mofaApp', [])
  .controller('MainCtrl', function() {
    this.query = "";
    this.convert = mofafegoli.convert;
  });
