angular.module('directoryApp', ['ngAnimate', 'ui.router'])
  .config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: '/static/home.html',
        controller: 'directoryCtrl as dirList'
      })
      .state('about', {
        url: '/about',
        templateUrl: '/static/about.html'
      });
  })
  .controller('directoryCtrl', function(){

    var dirList = this;

    dirList.toggle = true;

    dirList.list = [
      {name:'Scott', age: 29, img:'https://s3.amazonaws.com/uifaces/faces/twitter/towhidzaman/128.jpg'},
      {name:'Ben', age: 34, img:'https://s3.amazonaws.com/uifaces/faces/twitter/sauro/128.jpg'},
      {name:'Ross', age: 33, img:'https://s3.amazonaws.com/uifaces/faces/twitter/jonohunt/128.jpg'},
      {name:'Courtney', age: 29, img:'https://s3.amazonaws.com/uifaces/faces/twitter/kfriedson/128.jpg'}
    ];

    dirList.addPerson = function() {
      dirList.list.push({name:dirList.name, age:dirList.age});
      dirList.name = '';
      dirList.age = 0;
    };
  })

  .directive('directoryPerson', function() {
    return {
      templateUrl: 'directory-person.html'
    }
  });
