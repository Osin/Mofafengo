/**
 * Created by osin on 11/04/16.
 */
angular.module('mofaApp', [])
  .controller('MainCtrl', function() {
    this.query = "";
    this.vowels = mofafegoli.vowels;
    this.convert = mofafegoli.convert;
    this.consonants = mofafegoli.consonants;
    this.hasValue = function(aSyllabe){
      var word = !isNaN(parseInt(this.query)) ? this.convert(this.query) : this.query;
      return word.includes(aSyllabe);
    }
  });
